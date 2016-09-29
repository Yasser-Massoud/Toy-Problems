/*
All Anagrams
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

Parameters:

string (required) - a string of characters.

Examples

Input
												Output
string:
"abc"										[ "abc", "acb", "bac", "bca", "cab", "cba" ]s

*/

///Solution///

function allAnagrams(string) {
  var uniqOutput = {};

  (function anagram(ana, string) {
    if (string === '') {
      uniqOutput[ana] = 1;
    }

    for (var i = 0; i < string.length; i++) {
      anagram(ana + string[i], string.slice(0, i) + string.slice(i + 1))
    }
  })('', string)

  return Object.keys(uniqOutput);
}