/*
Description:

Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil if input is empty string or null/nil.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null
*/

///Solutions///

function greet(name) {
    //should handle cases when name is null
    if (name === null) {
        return null;
    }
    //should handle cases when name is empty
    if (name.length <= 0) {
        return null;
    }
    //should greet user when the input is a string
    if (typeof(name) === "string") {
        return "hello "+name+"!";
    } else {
     //should handle cases when the input is not a string
        return null;
    }
   
}


///Refactored///

function greet(name) {
  return name ? 'hello ' + name + '!' : null;
}