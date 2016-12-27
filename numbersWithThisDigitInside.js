/*
You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,

their sum 

and their product.


For example:

x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]

If there are no numbers, which include the digit, return [0,0,0]. 
*/

///Solution///

function numbersWithDigitInside (range, digit) {
    var result = [];
    var count = 0;
    var sum = 0;
    var product = 0;

    for (var x = 1; x <= range; x += 1){
        if (x < 10 && x === digit){
            count += 1;
            sum += x;
            product === 0 ? product = x : product *= x;
         }else{
             var compare = x+"";
             if(compare.includes(digit)){
                 count += 1;
                 sum += x;
                 product === 0 ? product = x : product *= x;
             }
         }
       
    }
    result.push(count);
    result.push(sum);
    result.push(product);
    return result;
}
