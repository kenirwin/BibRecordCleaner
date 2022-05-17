# BibRecordCleaner
Javascript scripts for cleaning bibliographic data (good for Google Sheets). To use these functions in a Google Sheet that you own, go to Extensions > AppScripts and paste the `AppScript.js` file into the AppScript editor and save it. Then you can use the following scripts in your Google Sheets formulas as shown below in the examples.

CleanAuthorString(str) - removes cruft from end of author string
CleanTitleString(str) - removes cruft from end of title string
FirstISN(input) - returns first 8-13 digit string from a string or integer input

## Examples
### CleanAuthorString
`=CleanAuthorString("Whitman, Sylvia, 1961-")`   
expected result: "Whitman, Sylvia"

`=CleanAuthorString("Raschka, Christopher, author")`   
expected result: "Raschka, Christopher"

`=CleanAuthorString("Petersham, Maud Fuller, 1890-1971")`  
expected result: "Petersham, Maud Fuller"

### CleanTitleString
`=CleanTitleString("When dinosaurs die : a guide to understanding death / Laurie Krasny Brown and Marc Brown")`  
expected result: "When dinosaurs die : a guide to understanding death"  

`=CleanTitleString("Marat/Sade / Peter Weiss")`  
expected result: "Marat/Sade "  

`=CleanTitleString("Leo the late bloomer. Pictures by Jose Aruego")`  
expected result: "Leo the late bloomer"  

### FirstISN
`=FirstISN('079225922X (hardcover);"9780792259220 (hardcover)";"0792259238 (library binding)";"9780792259237 (library binding)"')`  
expected result: "079225922X"  

`=FirstISN(892365587)`  
expected result: 892365587  

`=FirstISN('0792259254;"9780792259251";"0792259246 (hardcover)";"9780792259244 (hardcover)"')`  
expected result: "0792259254"  

