/*
Confirming the Ending

Check if a string(str) the first argument ends with the given target string(target) second argument.

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring mehtods instead.

Examples

confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.

*/

///Solution///

function confirmEnding(str, target) {
  var end = target.length;
  if (str.substr(str.length-end)===target){
    str = true;
  }else{
    str = false;
  }
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}