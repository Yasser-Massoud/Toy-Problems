/*
  Give an integer array [arr], count element x such that x+1 is also in [arr]
  If there's duplicates in [arr], count them seperately

  Example 1: 
  input: [1,2,3]
  output: 2
  Explanation: 1 and 2 are counted cause 2 and 3 are in the input.
  Constraints: 
    * 1 <= arr.length <=1000
    * 0 <= arr[i] <= 1000
*/
const input = [1,2,3]
/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = function(arr) {
  if(arr.length === 0 || arr.length > 1000) {
    return 0;
  }
  let output = 0;
  const hashset = arr.reduce((a, c) => {
    if(c < 0 || c > 1000) return 0
    let element = c + 1;
    if(!a.hasOwnProperty(element)){
      a[element] = 1;
    } else {
      a[element] += 1;
    }
    return a;
  },{});
  const hashSetKeys = Object.keys(hashset)
  hashSetKeys.forEach(int => {
    if(arr.includes(Number(int))) {
      output += hashset[int] 
    }
  })
  return output;
};
