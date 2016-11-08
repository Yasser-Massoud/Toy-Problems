/*
Persistent Bugger

Problem Description: Write a function, persistence, that takes in a positive parameter num and returns its 
multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a 
single digit.

Examples

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
 persistence(4) === 0 // because 4 is already a one-digit number

*/

///Solution///

function persistence(num) {
    num=num.toString();
    var count=0;
    while(num.length!==1){
        var prod=1;
        var i=0;
        while(i<num.length){
            prod*=parseInt(num[i]);
            i++;
        }
        num=prod.toString();
        count++;
    }
    return count;
}