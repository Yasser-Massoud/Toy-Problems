/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Implement the method stray which accepts such array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples:

[1, 1, 2] => 2

[17, 17, 3, 17, 17, 17, 17] => 3
*/

///Solutions///

function stray(array) {
  var unique, common;
  for (var i = 1; i < array.length; i++) {
      //set the first value to common
      common = array[0];
      //if they are equal we know the common value
      if (common === array[i]){
        continue;
      } else {
          if (i === 1) {
              // compare common which is the array[0] to array[2]
              if(array[2] === common) {
                  unique = array[1]
                  continue;
              }else{
                  unique = common;
              }
          } else {
              unique = array[i];
          }
      }
    return unique;
  }  
}