/*
Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
*/
///Solution///

function squareDigits(num){
  var x = num.toString().split("");
  var arr = x.map(function(num){
  	return Math.pow(num, 2).toString()
  })
  return parseInt(arr.join(""))
}