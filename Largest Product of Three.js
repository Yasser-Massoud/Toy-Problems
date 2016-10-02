/*
Largest Product of Three

Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

Example

Input							Output

array:
[2,1,3,7]					42


[0,2,3]						0
*/

///Solution///

function largestProductOfThree (array) {
var x = array.sort(function(a, b) {
  return a - b;
});
var option1 = x[x.length-1]*x[x.length-2]*x[x.length-3];
var option2 = x[0]*x[1]*x[x.length-1];
  if (option1>option2){
    return option1;
  }
  else{
    return option2;
  }
}
