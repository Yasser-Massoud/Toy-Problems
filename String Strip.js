/*
String Strip
Write a function that removes a given character from both ends of a given string. If no character is given, then strip spaces instead.

Examples

Input															Output
str:
"abc"
character:
"c"																	"ab"

str:
"abc"
character:
"a"																	"bc"

str:
"aba"
character:
"a"																	"b"

*/

///Solution///

function strip (str, character) {
  str = str.split('');
  str = str.map(function(char){
    if (char !== ' '){
      return char;
    }
  })
  
	str = beginning(str, character)
	str = end(str, character)
	return str.join('')
}



function beginning (str, character){
	if (str[0]!==character){
		return str;
	
	}
	str.shift()
	return beginning(str, character)
}

function end (str, character) {
	if (str[str.length-1] !== character){
		return str;
	}
	str.pop()
	return end(str, character)
}