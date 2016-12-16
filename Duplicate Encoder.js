/*
Description:

The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

*/

///Solution///

function duplicateEncode(word) {
	var letterCount = {};
	word = word.toLowerCase();
	word = word.split('');
	for (var i = 0; i < word.length; i++) {
	   if (!letterCount[word[i]]){
	       letterCount[word[i]] = 1;
	   } else {
	       letterCount[word[i]] += 1;
	   }
	}
	for (var j = 0; j < word.length; j++) {
	   if (letterCount[word[j]] === 1) {
	       word[j] = '(';
	   } else {
	       word[j] = ')';
	   }
	}

	return word.join('');
}
