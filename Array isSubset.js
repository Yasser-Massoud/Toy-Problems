/*
Array isSubset

Create a function that takes two arrays and determine whether the second array is a subset of the first array. 
Arrays will only contain primitive values.

Examples

Input									Output
array:
[ 1, 2, 3, 4 ]
sub:
[ 2, 3, 4 ]						true


array:
[ 2, 2, 2, 3, 4 ]
sub:
[ 2, 4, 3 ]						true


array:
[ 2, 3, 3, "a" ]
sub:
[ 3, 3, 3, "a" ]			false

*/

///Solution///

function isSubset (array, sub) {
var newArray = [];
//two loops outer is the sub inner is the original
for (var i = 0; i <sub.length; i++) {
  for (var j = 0; j < array.length; j++) {
    //conditional test if the value we are looking at in the sub
    //is equal to the original push to a newArray
    //then delete the value from the original
    //finally break out of inner loop and go to the next sub[i]
  if (sub[i] === array[j]) {
      newArray.push(sub[i]);
      delete array[j];
          break;
   }
  }
 }
 // empty array return true;
 if (sub.length === 0) {
  return true;
 }
 // compare newArray to sub
 for (var k = 0; k < sub.length; k++) {
     if (newArray[k] !== sub[k]) {
         return false;
     }
 }return true;

}