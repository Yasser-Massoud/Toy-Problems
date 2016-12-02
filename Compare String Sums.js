/*
Description:

Compare two strings by comparing the sum of their values (ASCII character code).
For comparing treat all letters as UpperCase.

Null-Strings should be treated as if they are empty strings.
If the string contains other characters than letters, treat the whole string as it would be empty.

Examples:

"AD","BC" -> equal

"AD","DD" -> not equal

"gf","FG" -> equal

"zz1","" -> equal

"ZzZz", "ffPFF" -> equal

"kl", "lz" -> not equal

null, "" -> equal

Your method should return true, if the strings are equal and fals if they are not equal.
*/

///Solution///


var compare = function(s1, s2) { 
var Exp = /^[a-zA-Z]*$/;
var totalValueS1 = 0;
var totalValueS2 = 0;

	if (!s1) {
	  s1 = "";
	}; 
	if (!s2) {
	  s2 = "";
	};

	if(!s1.match(Exp))
    s1 = "";

	if(!s2.match(Exp))
    s2 = "";
    
	s1 = s1.toUpperCase();
	s2 = s2.toUpperCase();  
	for (var i = 0; i < s1.length; i++) {
    // console.log(s1.charCodeAt(i));
    totalValueS1 = totalValueS1 + (s1.charCodeAt(i))
	}

	for (var j = 0; j < s2.length; j++) {
    // console.log(s2.charCodeAt(j));
    totalValueS2 = totalValueS2 + (s2.charCodeAt(j))
	}

	if (totalValueS1 == totalValueS2 ) {

	return true

	} else { 

	return false
	}
}


