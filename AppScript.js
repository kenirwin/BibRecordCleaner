// Scripts for cleaning bibliographic data
// Author: Ken Irwin, irwinkr@miamioh.edu
// Version: 0.1.1
// Date: 2022-05-19

/* three scripts:
CleanAuthorString(str) - removes cruft from end of author string
CleanTitleString(str) - removes cruft from end of title string
FirstISN(input) - returns first 8-13 digit string from a string or integer input
*/

function TestClean() {
  arr = [
    'Messenger;"I am the messenger / by Markus Zusak"',
    'Babar en famille. English;"Babar and his children   translated from the French by Merle Haas"',
    'Short stories. English. Selections;"When Shlemiel went to Warsaw & other stories / Isaac Bashevis Singer   pictures by Margot Zemach   translated by the author and Elizabeth Shub"',
  
  ];
  arr.forEach(str => console.log(CleanTitleString(str)));
}

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

  // remove original title on translated works
  re = /(.*)\. English([^;]*); *\"*(.+)\"*/;
  if (str.match(re)) {
    str = str.replace(re,'$3');
  }

  // remove some uniform title cruft
  re = /.+;\"(.*)/;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

 // remove the "/ authorname"
  re = /(.*) \/.*/;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove "written and illustrated by..."
  re = /(.*) written and illus.*/i;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove "selected and arrange by..."
  re = /(.*) selected and arranged.*/i;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove "with illus by..."
  re = /(.*) with illus.* by .*/i;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove "with drawings by..."
  re = /(.*) with drawings.* by .*/i;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove "with the original illus by..."
  re = /(.*) with original illus.*/i;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove "with the original illus by..."
  re = /(.*) with original illus.*/i;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove "illustrated by..."
  re = /(.*) illustrated by.*/i;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove "illus. by..."
  re = /(.*) illus\.* by.*/i;
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

  // remove . Translated by
  re = /(.*)\. [tT]ranslated by.*/;
  if (str.match(re)) {
    str = str.replace(re,'$1');
  }

  // remove . Written by
  re = /(.*)\. [wW]ritten by.*/;
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

