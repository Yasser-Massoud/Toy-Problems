/*
Sum All

Sum All Numbers in a Range
We'll pass you an array of two numbers. 
Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/

///Solution///
function sumAll(arr) {
  
  var sortedArr = arr.sort(function(a,b){return a-b;});
  var firstNum = arr[0];
  var lastNum = arr[1];
 
  // Using Arithmetic Progression summing formula

  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}