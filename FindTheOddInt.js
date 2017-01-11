/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

///Solution///
function findOdd(A) {
  let counterObj = A.reduce((acc,int) =>{
      if (!acc[int]){
          acc[int] = 0;
      }
      acc[int] += 1;
      return acc;
  }, {});
  for (key in counterObj) {
      if (counterObj[key] % 2 !== 0){
          return parseInt(key);
      }
  }
}

