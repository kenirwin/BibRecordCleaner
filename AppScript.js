// Scripts for cleaning bibliographic data
// Author: Ken Irwin, irwinkr@miamioh.edu
// Version: 0.2
// Date: 2022-05-19

/* three scripts:
CleanAuthorString(str) - removes cruft from end of author string
CleanTitleString(str) - removes cruft from end of title string
FirstISN(input) - returns first 8-13 digit string from a string or integer input
plus: 
TestClean() tests some (but not all) title conditions
*/

function TestClean() {
  arr = [
    'Messenger;"I am the messenger / by Markus Zusak"',
    'Babar en famille. English;"Babar and his children   translated from the French by Merle Haas"',
    'Short stories. English. Selections;"When Shlemiel went to Warsaw & other stories / Isaac Bashevis Singer   pictures by Margot Zemach   translated by the author and Elizabeth Shub"',
    'Dr Q. Written by Peter David',
  'Cat in the Hat illustrated by Dr. Seuss',
  'Forty-two stories. Translated from the Danish by M.R. James.',
  'Four & twenty blackbirds  nursery rhymes of yesterday recalled for children of to-day  collected by Helen Dean Fish,',
'A family book of nursery rhymes, gathered by Iona and Peter Opie. With'
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

  // patterns to lop off after the first part
  // all should end with .* wildcard
  regexes = [
    /(.*) \/.*/, // everything after the slash / authorname
    /(.*) (compiled|edited|written|selected|collected|prepared|gathered|selected and arranged|special photography|retold|shortened and simplified) by .*/i,
    /(.*) written and illus.*/i,
    /(.*) trans(\.|lated) .* by .*/i,
    /(.*) selected and arranged.*/i,
    /(.*) (with )*(original )*(drawings|illus|pictures).* by .*/i,
    /(.*)\. with .*/i, // any "with" after a period
    /(.*) \[by\].*/i, // remove [by] ...
    /(.*)[\:\,] by.*/i, // remove ": by
    /(.*), *$/, // remove trailing commas
  ];

// foreach of these regexes, lop off everything after the first part:
  regexes.forEach(re => {
    if (str.match(re)) {
      str = str.replace(re, '$1')
    }
  })

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

