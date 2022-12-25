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

    for (book of scannedTextObj) {
        // console.log(book.Content);
        for (item of book.Content) {

            let lineWhereFound = {}; // result to add if found
            // console.log(item.Text);
            if (item.Text.includes(searchTerm)) { // if we find the search term in the content item, add to result
                lineWhereFound["ISBN"] = book.ISBN;
                lineWhereFound["Page"] = item.Page;
                lineWhereFound["Line"] = item.Line;

                // console.log(lineWhereFound);

                result.Results.push(lineWhereFound);                
            }
        }
    }
    
    // console.log(result);

    return result; 
}

/** Example input object. */
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


    
/** Example output object */
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
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

// Refactored test helper function
function testFindSearchTermInBooksHelper(testNumber, searchTerm, bookInput, expectedLength, expectedResult) {

    testResult = findSearchTermInBooks(searchTerm, bookInput);

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
    testFindSearchTermInBooksHelper(3, "The", twentyLeaguesIn, 1, twentyLeaguesOutTest3)
    ) 
    {
        console.log("ALL TESTS PASSED");
    } else {
        console.log("TESTS FAILED: See above test for info");
    }
}

testFindSearchTermInBooks();

console.log("\n\nDRACULAAAAAAAA");
console.log(findSearchTermInBooks("The",dracula));
console.log(findSearchTermInBooks("vampire",dracula));
console.log(findSearchTermInBooks("Dracula",dracula));
console.log(findSearchTermInBooks("dracula",dracula));
console.log(findSearchTermInBooks("Mina",dracula));

console.log("\n\nall the books");
console.log(findSearchTermInBooks("The",multipleBooks));
console.log(findSearchTermInBooks("the",multipleBooks));
console.log(findSearchTermInBooks("Dracula",multipleBooks));
console.log(findSearchTermInBooks("vampire",multipleBooks));
console.log(findSearchTermInBooks("Canadian",multipleBooks));