/*
Zero Sum

Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Examples

Input															Output

numbers:
[ 1, 3, 2, -3 ]										true

numbers:
[ 5, 7, 2, 9 ]	                  false
*/

///Solution//

function zeroSum (numbers) {
	var result = false;
// iterate through numbers
  for (var i = 0; i < numbers.length; i += 1){
  	// assign x to the values in the numbers array
  	var x = numbers[i]
  	console.log(x)
  	// loop through numbers again comparing numbers at i to all the remaining numbers
  	for (var j = 1; j < numbers.length; j += 1){
  		// if x + any of the numbers left in the array equal zero 
  		if(x+numbers[j]===0){
  	    // assign the result to true
  		result = true;	
  		}
  	}
  }
  return result;
}
