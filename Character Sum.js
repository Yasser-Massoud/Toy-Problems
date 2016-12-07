/*
Character Sum

Given a string of arbitrary size, convert each character into its integer equivalent and sum the entirety.

Examples

Input										Output
str:
"123"										6
str:
"0101"									2
str:
"so cool!!1!"						1
*/

// function charSum (str) {
//   var total = str.split('');
  
//   total = total.map(function(num){
// 	return Math.floor(num);
//     }).
//     filter(function(val){
//     	return isNaN(val)===false;
//     }).
//     reduce(function(sum, num){
//     	return sum + num;
//     });
//     return total;
// }

function charSum (str) {
  return str.split('').reduce((sum, char) =>
    sum + (Number(char) || 0), 0)
}