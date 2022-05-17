// Scripts for cleaning bibliographic data
// Author: Ken Irwin, irwinkr@miamioh.edu
// Version: 0.1
// Date: 2022-05-17

/* three scripts:
CleanAuthorString(str) - removes cruft from end of author string
CleanTitleString(str) - removes cruft from end of title string
FirstISN(input) - returns first 8-13 digit string from a string or integer input
*/

function CleanAuthorString(str) {
  //remove ", author"
  let re = /(.*), author/;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  //remove ", illustrator"
  re = /(.*), illustrator/;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }
  //remove ", dddd-?"
  re = /(.*), \d\d\d\d.*/;
    if (str.match(re)) {
    str = str.replace(re,'$1');
  }
  return str;
}

function CleanTitleString(str) {
 // remove the "/ authorname"
  re = /(.*) \/.*/;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove "illustrated by..."
  re = /(.*) [Ii]llustrated by.*/;
    if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove [by] ...
  re = /(.*) \[by\].*/;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove . Pictures by
  re = /(.*)\. [pP]ictures by.*/;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove . Compiled by
  re = /(.*)\. [cC]ompiled by.*/;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove ": by "
  re = /(.*)[\:\,] by.*/;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }
  return str;
}

function FirstISN(input) {
  let str = String(input);
  let re = /(\d{8,13}).*/;
  if (str.match(re)) {
    return str.replace(re,'$1');
  }
  return str;
}

