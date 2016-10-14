/*
Binary Search Array

Given a sorted array of integers, find the index of a target value using a binary search algorithm.

A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. 
The initial interval includes the whole array.
If the value of the target value is less than the middle value of the interval, 
then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, 
then the next interval will be the upper half. 
The search process repeats until the middle value is equal to the target value, or the search interval is empty.

*/

///Solution///

function binarySearch (array, target) {
	let low = 0;
	let high = array.length-1;
	let middle; 
	
	while (low <= high){
		middle = Math.floor((high + low) / 2);
		if ( array[middle] === target ) {
			return middle;
		}
		if(target > array[middle]){
			// re-assign middle by subtracting the lower half of the original array values from the search
			low = middle + 1;
		}
		if(target < array[middle]){
			// re-assign middle by subtracting the higher half of the original array
			high = middle -1;
		}
	}
		return -1
}