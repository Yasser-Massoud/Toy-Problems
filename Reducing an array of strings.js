/*
Reducing an array of strings

Given an array of strings, return all strings concatenated together.

DO NOT use strings.reduce() nor strings.join('')

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

Examples

Input															Output
strings:
[ "a", "b", "c" ]									"abc"
strings:
[ ]																""

*/

///Solutions///

function concatStrings (strings) {
  var results = "";
  for (var i=0; i < strings.length; i++) {
	results += strings[i];
  }
  return results;
}

/*
  Recursion
*/
function concatStrings (strings) {
  
  if (strings.length === 0) {
    return '';
  } else {
    return strings[0] + concatStrings(strings.slice(1, strings.length));
  }
  
}


