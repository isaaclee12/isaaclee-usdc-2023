const dracula = require('./dracula.json');
const multipleBooks = require('./multipleBooks.json');

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */

function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    let result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    // implement error catching
    try {
        for (book of scannedTextObj) {
            // console.log(book.Content);
            for (item of book.Content) {

                // \\b matches any word boundaries (double escaped because regex)
                // and ^ and $ match then start/end of a string, respectively
                const regex = new RegExp('(\\b|^)' + searchTerm + '(\\b|$)', "g");

                // Debug code:
                // console.log((regex) + " in " + item.Text + " = " + item.Text.match(regex));

                let lineWhereFound = {}; // result to add if found

                if (regex.test(item.Text)) { // if we find the search term in the content item, add to result 

                    // console.log(item.Text);
                    lineWhereFound["ISBN"] = book.ISBN;
                    lineWhereFound["Page"] = item.Page;
                    lineWhereFound["Line"] = item.Line;

                    // console.log(lineWhereFound);

                    result.Results.push(lineWhereFound);
                }
            }
        }
    } catch (e) { // Realistically speaking, one may prefer to have a a more robust error catching system
        // Though such a thing may be beyond the scope of this challenge
        console.error(e);
    }

    // console.log(result);

    return result;
}


/** Example input objects for testing. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    }
]


/* More example input objects for unit tests regarding edge cases */
const emptyBook = []

const bookWithNoContent = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": []
    }
]

const manyBooksWithNoContent = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": []
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": []
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": []
    }
]

const booksMissingFields = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "Content": []
    },
    {
        "ISBN": "9780000528531",
        "Content": []
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea"
    },
    {

    }
]



/** Example output objects */
const twentyLeaguesOutTest1 = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOutTest2 = {
    "SearchTerm": "egg",
    "Results": []
}

/** Example output object */
const twentyLeaguesOutTest3 = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/* 
Tests for Dracula by Bram Stoker
 */
const draculaOutTest1 = {
  SearchTerm: 'The',
  Results: [
    { ISBN: '9781530681037', Page: 4, Line: 2 },
    { ISBN: '9781530681037', Page: 4, Line: 8 },
    { ISBN: '9781530681037', Page: 5, Line: 7 },
    { ISBN: '9781530681037', Page: 7, Line: 21 }
  ]
}

const draculaOutTest2 = {
    SearchTerm: 'vampire', // Ironically, the word "vampire" does not actually show up in the json
    Results: []
}

const draculaOutTest3 = {
  SearchTerm: 'Dracula',
  Results: [
    { ISBN: '9781530681037', Page: 4, Line: 28 },
    { ISBN: '9781530681037', Page: 5, Line: 19 },
    { ISBN: '9781530681037', Page: 6, Line: 2 }
  ]
}

const draculaOutTest4 = { 
    SearchTerm: 'dracula', // Case sensitive test, "dracula" as a word only ever has a capital "D"
    Results: [] 
}

const draculaOutTest5 = {
  SearchTerm: 'Mina', // Mina is one of the main characters, so one would expect their name to appear
  Results: [ { ISBN: '9781530681037', Page: 7, Line: 19 } ]
}


/* Tests for multiple books */

// console.log(findSearchTermInBooks("The",multipleBooks));
const multipleBooksOutTest1 = {
  SearchTerm: 'The',
  Results: [
    { ISBN: '9780000528531', Page: 31, Line: 8 },
    { ISBN: '9781530681037', Page: 4, Line: 2 },
    { ISBN: '9781530681037', Page: 4, Line: 8 },
    { ISBN: '9781530681037', Page: 5, Line: 7 },
    { ISBN: '9781530681037', Page: 7, Line: 21 }
  ]
}

// console.log(findSearchTermInBooks("the",multipleBooks));
// Every instance of the word "the" in both books, which I checked manually after running the above console.log
const multipleBooksOutTest2 = {
  SearchTerm: 'the',
  Results: [
    { ISBN: '9780000528531', Page: 31, Line: 9 },
    { ISBN: '9781530681037', Page: 4, Line: 3 },
    { ISBN: '9781530681037', Page: 4, Line: 6 },
    { ISBN: '9781530681037', Page: 4, Line: 8 },
    { ISBN: '9781530681037', Page: 4, Line: 9 },
    { ISBN: '9781530681037', Page: 4, Line: 15 },
    { ISBN: '9781530681037', Page: 4, Line: 19 },
    { ISBN: '9781530681037', Page: 4, Line: 20 },
    { ISBN: '9781530681037', Page: 4, Line: 21 },
    { ISBN: '9781530681037', Page: 4, Line: 25 },
    { ISBN: '9781530681037', Page: 4, Line: 26 },
    { ISBN: '9781530681037', Page: 4, Line: 28 },
    { ISBN: '9781530681037', Page: 5, Line: 2 },
    { ISBN: '9781530681037', Page: 5, Line: 3 },
    { ISBN: '9781530681037', Page: 5, Line: 4 },
    { ISBN: '9781530681037', Page: 5, Line: 11 },
    { ISBN: '9781530681037', Page: 5, Line: 13 },
    { ISBN: '9781530681037', Page: 5, Line: 14 },
    { ISBN: '9781530681037', Page: 5, Line: 16 },
    { ISBN: '9781530681037', Page: 5, Line: 21 },
    { ISBN: '9781530681037', Page: 5, Line: 28 },
    { ISBN: '9781530681037', Page: 6, Line: 1 },
    { ISBN: '9781530681037', Page: 6, Line: 5 },
    { ISBN: '9781530681037', Page: 6, Line: 8 },
    { ISBN: '9781530681037', Page: 6, Line: 16 },
    { ISBN: '9781530681037', Page: 6, Line: 20 },
    { ISBN: '9781530681037', Page: 6, Line: 21 },
    { ISBN: '9781530681037', Page: 6, Line: 22 },
    { ISBN: '9781530681037', Page: 7, Line: 10 },
    { ISBN: '9781530681037', Page: 7, Line: 12 },
    { ISBN: '9781530681037', Page: 7, Line: 13 },
    { ISBN: '9781530681037', Page: 7, Line: 14 },
    { ISBN: '9781530681037', Page: 7, Line: 16 },
    { ISBN: '9781530681037', Page: 7, Line: 17 },
    { ISBN: '9781530681037', Page: 7, Line: 20 },
    { ISBN: '9781530681037', Page: 7, Line: 21 },
    { ISBN: '9781530681037', Page: 7, Line: 22 }
  ]
}

// console.log(findSearchTermInBooks("Dracula",multipleBooks));
// Test for searchTerm "Dracula" in both books, which of course only appears in the book "Dracula"
const multipleBooksOutTest3 = {
  SearchTerm: 'Dracula',
  Results: [
    { ISBN: '9781530681037', Page: 4, Line: 28 },
    { ISBN: '9781530681037', Page: 5, Line: 19 },
    { ISBN: '9781530681037', Page: 6, Line: 2 }
  ]
}

// console.log(findSearchTermInBooks("egg cheese apple bacon",multipleBooks));
// negative test with a random search term that should return an empty Results array
const multipleBooksOutTest4 = { 
    SearchTerm: 'egg cheese apple bacon', 
    Results: [] 
}

// console.log(findSearchTermInBooks("Canadian",multipleBooks));
// test to make sure we detect searchTerm "Canadian" only in 20000 Leagues and not in Dracula
const multipleBooksOutTest5 = {
  SearchTerm: 'Canadian',
  Results: [ { ISBN: '9780000528531', Page: 31, Line: 9 } ]
}

// Edge cases
const edgeCaseResult = {
    SearchTerm: 'The',
    Results: [] 
}





/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/
                                                      
 */

// Test helper function, refactored from original unit tests
function testFindSearchTermInBooksHelper(testNumber, searchTerm, bookInput, expectedLength, expectedResult) {

    testResult = findSearchTermInBooks(searchTerm, bookInput);

    // Debug: Uncomment to see search term for each test
    // console.log("\nSearching for:", searchTerm);

    // length test
    if (testResult.Results.length !== expectedLength) {
        console.log("FAIL: Test", testNumber);
        console.log("Expected Length:", expectedLength);
        console.log("Received Length:", testResult.Results.length);
        return false;
    }

    // exact match test
    if (JSON.stringify(testResult) !== JSON.stringify(expectedResult)) {
        console.log("FAIL: Test", testNumber);
        console.log("Expected:", expectedResult);
        console.log("Received:", testResult);
        return false;
    }

    // if all tests passed, return true

    // This line is for debug/visualization purposes, un-comment it if you want to see the results from each test
    // console.log("Got result:", testResult);
    
    console.log("PASS: Test", testNumber)
    return true;
}


function testFindSearchTermInBooks() {
    if (
        // Positive test - check that the results has a specific length and content 
        testFindSearchTermInBooksHelper(1, "the", twentyLeaguesIn, 1, twentyLeaguesOutTest1) &&

        // Negative test - check that results array is returned empty when searching for a term not in the book.
        testFindSearchTermInBooksHelper(2, "egg", twentyLeaguesIn, 0, twentyLeaguesOutTest2) &&

        // Case sensitive test: "The" vs "the"
        testFindSearchTermInBooksHelper(3, "The", twentyLeaguesIn, 1, twentyLeaguesOutTest3) &&

        // Tests for dracula
        testFindSearchTermInBooksHelper(4, "The", dracula, 4, draculaOutTest1) &&
        testFindSearchTermInBooksHelper(5, "vampire", dracula, 0, draculaOutTest2) &&
        testFindSearchTermInBooksHelper(6, "Dracula", dracula, 3, draculaOutTest3) &&
        testFindSearchTermInBooksHelper(7, "dracula", dracula, 0, draculaOutTest4) &&
        testFindSearchTermInBooksHelper(8, "Mina", dracula, 1, draculaOutTest5) &&

        // Tests for dracula + 20000 Leagues combined in one JSON
        testFindSearchTermInBooksHelper(9, "The", multipleBooks, 5, multipleBooksOutTest1) &&
        testFindSearchTermInBooksHelper(10, "the", multipleBooks, 37, multipleBooksOutTest2) &&
        testFindSearchTermInBooksHelper(11, "Dracula", multipleBooks, 3, multipleBooksOutTest3) &&
        testFindSearchTermInBooksHelper(12, "egg cheese apple bacon", multipleBooks, 0, multipleBooksOutTest4) &&
        testFindSearchTermInBooksHelper(13, "Canadian", multipleBooks, 1, multipleBooksOutTest5) &&

        // scannedTextObj = [], i.e. empty, so return empty results
        testFindSearchTermInBooksHelper(14,"The",emptyBook,0,edgeCaseResult) &&

        // scannedTextObj has one book with an empty content field
        testFindSearchTermInBooksHelper(15,"The",bookWithNoContent,0,edgeCaseResult) &&

        // scannedTextObj has many books all with missing fields content fields, so return empty results
        testFindSearchTermInBooksHelper(16,"The",manyBooksWithNoContent,0,edgeCaseResult) &&

        
        /* 
            ***** NOTE FOR REVIEWER: TEST 17 will console.log a caught typeError to demonstrate handling of bad book JSONs. *****
        */

        // Should catch an ERROR since book object is improperly formatted
        // This test was good to do as it reminded me to catch any edge case errors like these
        testFindSearchTermInBooksHelper(17,"The",booksMissingFields,0,edgeCaseResult)
 
    ) {
        console.log("\nALL TESTS PASSED");
    } else {
        console.log("\nTESTS FAILED: See above test for info");
    }
}


testFindSearchTermInBooks();