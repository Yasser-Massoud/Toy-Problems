/*
Deep Equality

Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.
*/

///Solution///

var a = { foo: [2, { bar: {}}]}
var b = { foo: [2, { bar: []}]}

function deepEquals(a, b){
  
  // If it is an object we will test for deep equality and nested thigns
  if(typeof a === "object" && typeof b === "object"){
    
    // Make sure they are both objects or both arrays
    if(Array.isArray(a) !== Array.isArray(b)) 
      return false
    
    // Get all the keys for both Arrays and Objects
    // for loop doesn't care about object type
    var aKeys = Object.keys(a)
    var bKeys = Object.keys(b)
    
    
    // Make sure that the collection lengths are the same.
    if(aKeys.length !== bKeys.length) 
      return false
    
    for(var i=aKeys.length; i>=0; i--){
      
      // If it wasn't deepEqual using all of A's keys, return false 
      if(deepEquals(b[aKeys[i]], a[aKeys[i]]) === false) 
        return false
    }

    for(var i=bKeys.length; i>=0; i--){
      // If it wasn't deepEqual using all of B's keys, return false 
      if(deepEquals(b[bKeys[i]], a[bKeys[i]]) === false) 
        return false
    }

    // If it didn't fail, return true
    return true
  }
  
  // If not an object do a normal comparison. This is also the base case.
  return a === b
};

deepEquals(a,b);