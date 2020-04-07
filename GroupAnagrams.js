/*
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
NOTE: 
All inputs will be in lowercase
The order of your ouptut does not matter.
*/

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
var groupAnagrams = function(strs) {
  const result = []
  const hash = {}
  const sorted = (s) =>  s.split('').sort().join('')
  for (let i = 0; i < strs.length; i++) {
    if(!hash.hasOwnProperty(sorted(strs[i]))) {
      hash[sorted(strs[i])] = [i];
    } else {
      hash[sorted(strs[i])] = [ ...hash[sorted(strs[i])], i]
    }
      
    
  } 
  const keys = Object.keys(hash);
  keys.forEach(key => {
    const mapped = hash[key].map(i => strs[i])
    result.push(mapped)
  

  })
  return result;
}