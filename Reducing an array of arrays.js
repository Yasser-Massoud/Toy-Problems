/*
Reducing an array of arrays

Given an array of arrays, return those arrays concatenated together.

DO NOT use arrays.reduce() or Function.prototype.apply

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

///Solution///

function concatArrays (arrays) {
  var concatArray = []
  for (var i = 0; i < arrays.length; i ++) {
      if (Array.isArray(arrays[i])){
        for(var j = 0; j < arrays[i].length; j ++) {
          concatArray.push(arrays[i][j]);
        }
      }else{
          concatArray.push(arrays[i]);
      }
  }
  return concatArray;
}
