/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
*/
///Example///

```
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
```
///Solutions///
function sortArray(array) {
  let oddNumbers = [];
  let result = []
  let count = 0;
  array.forEach(val => {
  	val % 2 !== 0 
    ? oddNumbers.push(val)
    : null
  })
  oddNumbers = oddNumbers.sort(function(a, b){return a-b})
  array.forEach(val => {
  	val % 2 !== 0 
    ? result.push(oddNumbers[count++]) 
    : result.push(val)
  })
  return result;
}

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}