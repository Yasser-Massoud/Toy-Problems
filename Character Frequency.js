/*
Character Frequency
Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

Examples

Input																		Output
string:
"aaabbc"							[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

string:
"mississippi"				[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

string:
""																			[ ]

*/

///Solution///

function characterFrequency (string) {
  var output = {};
  var array = [];
	for (var i = 0; i < string.length; i += 1) {
		output[string[i]] = 0;
	}
	for (var j = 0; j < string.length; j += 1) {
		output[string[j]] += 1;
	}
	for (var k in output) {
		var temp = []
		
		temp.push(k)
		temp.push(output[k])
		array.push(temp)
		
	}

	array = array.sort(function(a, b){
	console.log(a, 'a', b, 'b')
	if (a[1] < b[1]){console.log('returning a < b'); return 1;}
	else if (a[1] > b[1]){console.log('returning  a > b'); return -1;}
 	else if (a[0] < b[0]) return -1;
 	else if (a[0] > b[0]) return 1;	
});
return array;
}