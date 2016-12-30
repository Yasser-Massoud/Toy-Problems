/*Description:

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

///Solution///

function maxSequence (array) {
  if (!array.length){return 0;}
  var currentSum = array[0];
  var largestSum = array[0];
    for (var i=1; i<array.length; i++) {
      currentSum = Math.max((currentSum+array[i]), array[i]);
      largestSum = Math.max(currentSum, largestSum);
    }
  return largestSum < 0 ? 0 : largestSum;
}