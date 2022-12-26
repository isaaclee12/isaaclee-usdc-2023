<!-- TODO: Convert this to pdf later -->
# My Process


## Setup:
- I forked the repo, planning to theoretically PR back to the original repo as one would in a real professional setting 
- Cloned my fork into VSCode and ran the tester.html locally to test the base code. Opened the js console using F12 in Brave (which is Chrome but with more privacy) to see the .js file's output
- Immediately moved scripts to the bottom of the HTML. 
    - To my best understanding, script's block HTML rendering so it's generally best to run scripts at the end of the file so that the important HTML elements rendered first
- I then created a copy of book_search.js, as I know I'd be creating a version that was over-documented and possibly filled with debug console.log()'s

## Problem Assessment:
- I always begin these problems by clearly establishing parameters, returns, and examples (i.e. unit tests).

##### Parameters:
- @param {string} searchTerm - The word or term we're searching for. NOTE: search algorithm is case sensitive.
    - possible EDGE CASE: searchTerm is NOT a string, e.g. an int, null, or undefined

- @param {JSON} scannedTextObj - A JSON object representing the scanned text.
```
scannedTextObj = 
    [ 
        {title, ISBN, // book = object
            content = [     // content = array of lines of text in the book
                {page,line,text},
                {page,line,text},
                ... // EDGE CASE: A book might have an empty content array!
            ]
        },
        ...  // EDGE CASE: there could be 0 books in the scannedTextObj!
    ]
```
- We are told that "content" might be empty for some or all books, and that there may be no book objects to begin with.
- We'll make a TODO: Create test cases that account for this
- And another TODO: Make a bunch of JSON examples, that we will put in a separate file(s) as not to bloat book_search.js

- Questions to ask: 
    - Should we account for cases in which searchTerm is NOT a string, e.g. is null, undefined, or any native js type that's not a string?
    - Should we ALWAYS expect scannedTextObj to:
        - A. always be a JSON in this format with these exact keys and value-types
        - B. should we account for edge cases if A. is not true?

##### Returns:
- @returns {JSON} - Search results.
    - Format (relative to parameters and their attributes):
    ```
    searchResults = 
    {
        "SearchTerm": searchTerm,
        "Results": [
            {
                "ISBN": scannedTextObj.ISBN (string),
                "Page": scannedTextObj.content.page (integer, first instance where searchTerm was found),
                "Line": scannedTextObj.content.line (integer, first instance... etc) 
            },
            {
                "ISBN": scannedTextObj.ISBN (string),
                "Page": scannedTextObj.content.page (integer, second instance where searchTerm was found),
                "Line": scannedTextObj.content.line (integer, second instance... etc) 
            },
            ... //EDGE CASE: If searchTerm never found, Results will be an empty array. i.e. []
        ]
    }

- It's stated that we'll always return a JSON that's at least: ```{ "SearchTerm": (string), "Results": [] }```. I believe that this should be easy to hard code, but just in case...
- Even if the question may be trivial, I will ask if there's any time we might need to return something unexpected.

##### Examples:

- The examples/unit tests are the least defined piece of this problem, therefore we should make sure our examples cover as many different cases as possible.
- Possible Cases:

    - EDGE CASES:
    - scannedTextObj = [], i.e. empty, so return empty results
    - scannedTextObj has one book with an empty content field, so return empty results
    - scannedTextObj has many books all with empty content fields, so return empty results

    - BOOK LEVEL:

    - Multiple small books, where:
        - None have an instance of the "searchTerm"
        - Where only one has an instance of the "searchTerm"
        - Every book except one has an instance of the "searchTerm"
        - Every book has an instance of the "searchTerm"

    - And another set of examples, where the books that would have 1 instance have multiple instances 

    

    CONTENT LEVEL:        
    - Never mind this, we can ignore repeats ~~JSON with content that has multiple instances of the "searchTerm" within a single line~~
    - 
    - A series a random test cases that end up being a combination of the examples above, which can have the following variables:
        - zero, one, or multiple books
        - possibility of having empty content fields




## Implementation:
- I started by simply trying to implement the functionality of finding the given search term, "the", in the JSON input before anything else.

- Made "result" let instead of var because of A. scope errors, B. to prevent re-defining and possibility of undefined values in runtime.

- Ok it worked, in book_search_base_commented.

- TODO: Finish examples, Email the questions, and then while waiting trying to finish all of the edge cases

- Took dracula and made it in to a JSON via both python and a few manual edits

- console.log'd the results from various runs of the search function on the dracula.json
- AND a json that combines dracula + 20000 leagues under the sea

- I tried searching the word "the" in the new dracula.json, and discovered my code was returning lines containing "they" as well
- So I implemented regex word boundaries to prevent this error