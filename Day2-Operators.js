/*
Objective 
In this challenge, you'll work with arithmetic operators. 

Task 
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!

Input Format

There are 3 lines of numeric input: 
The first line has a double, mealCost (the cost of the meal before tax and tip). 
The second line has an integer, tipPercent (the percentage of mealCost being added as tip). 
The third line has an integer, taxPercent (the percentage of mealCost being added as tax).

Output Format

Print The total meal cost is totalCost dollars., where totalCost is the rounded integer result of the entire bill ( mealCost with added tax and tip).

Sample Input

12.00
20
8
Sample Output

The total meal cost is 15 dollars.
Explanation
 

We round  to the nearest dollar (integer) and then print our result:

The total meal cost is 15 dollars.
*/

///Solution///

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}


function mealCost(mealCost, tipPercent, taxPercent) {
     tip = mealCost *(tipPercent/100);
     tax = mealCost *(taxPercent/100);
     totalCost = mealCost + tip + tax;
     return totalCost = Math.floor(totalCost);
}
function main() {
    // Declare second integer, double, and String variables.
var mealCost, tipPercent, taxPercent, totalCost;
    
    
mealCost = Number(readLine());

tipPercent = parseFloat(Number(readLine())).toFixed(2);
    
taxPercent = parseFloat(Number(readLine())).toFixed(2);

mealCost = Math.round((mealCost*(tipPercent/100))+(mealCost *(taxPercent/100)) + mealCost); 


console.log("The total meal cost is " +mealCost+ " dollars.");
}