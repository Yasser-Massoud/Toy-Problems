/*
Highest Frequency

Given a string of only lowercase alphabet characters, 
find the character that occurs the highest number of times. 
If any characters tie, return them all in alphabetical order.

Examples

Input																Output
str:
"abcdc"																"c"

str:
"occurring"														"cr"

str:
"xxyyzz"															"xyz"

*/

///Solution///

var str= "abcdc";
function highestFreq (str) {
var result=[];
  //split the string into an array
  str = str.split('')
  //iterate throught the array
  //build an obj
  str = str.reduce(function(acc, current ){
  	 // keys will be the values of the array
  	if(!acc[current]){
  	  acc[current]=0;
	}
	 // and we'll keep a count of the number of times a character occurs
	acc[current] += 1;
   return acc;
   }, {});
   //loop through the object and determine if there is a highest character
   var highest = 0
   var arr = []
   for (var key in str) {
   arr.push(str[key]) 
   }
   arr = arr.sort();
   highest = arr[arr.length-1];
	for (var prop in str){
		if(str[prop]=== highest){
			result.push(prop)
		}
	}
	result = result.sort()
	return result.join('')

}