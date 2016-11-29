/*
Summing a number's digits

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. 

Example

	input                           output

  sumDigits(10);                 // Returns 1
  sumDigits(99);                 // Returns 18
  sumDigits(-32);                // Returns 5
Let's assume that all numbers in the input will be integer values.

*/

///Solution///

function sumDigits(number) {
  var result = 0
  number = number.toString();
  for (var i = 0; i < number.length; i++){
    if (number[i]!== '-') {
      result += parseInt(number[i],10);
    }
  }
  
  return result;
}