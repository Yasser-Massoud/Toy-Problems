/*
Only Unique
Given a string, remove any characters that are not unique from the string.

Examples

Input																		Output

str:
"abccdefe"															"abdf"

str:
"hello there"														"o tr"

str:
"xyz"																		"xyz"

str:
"iiii"																	""
*/

///Solution///

function onlyUnique(str){
// take the input and change to an array
 str = str.split("");
// initialize var object will keep count
var object = {};
var newArray=[];
// loop through array
for(var i = 0; i<str.length; i++){
// look at each value and keep count
	if(!object[str[i]]){
	 object[str[i]] =1
	}else{
	object[str[i]] += 1
	// built obj key/ value  letters/count
	}
}
// for in loop to our new object
for(var key in object){
	if(object[key]===1){
    newArray.push(key)
  }
}
// push to a new array values that are unique
 
 //if the count ===1
 		// we'll push values

// turn the new array into a string
  // use .join()
 return newArray.join('')
// return the string
}