/*
Bubble Sort

Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique.

NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

Examples

var input = [20, -10, -10, 2, 4, 299];
var expected = [-10, -10, 2, 4, 20, 299]
*/

///Solution///

var array = [ 20, -10, -10, 2, 4, 299 ]
function bubbleSort(array) {
	if(array.length < 2) {
		return array;
	}


function swap (array, first, second) {
	var temp = array[first];
	array[first] = array[second];
	array[second] = temp;
	
	return array;
	
}

function compare (a, b) {
	return a > b ? 1 : -1;
}

var l 

for (var i = 0; i < array.length; i +=1) {
	l = i;
	while (l-- && compare(array[l], array[l + 1]) > 0) {
		console.log(array[l + 1])
		swap(array, l, l + 1);
	}
}

return array;
}
