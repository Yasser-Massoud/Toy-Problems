/*
Merge Sort

Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.
*/

///Solution///

// a recursive function that splits an array into smaller arrays and then 
//sorts and merges them back together
function mergeSort(arr){
  let left;
  let right ;
  let middle = Math.floor(arr.length/2);
  if(arr.length <= 1){// split until there to small to split anymore
  	return arr;
  }else{// use a helper function to merge and sort the split arrays
  	left = mergeSort(arr.slice(0, middle));
    right = mergeSort(arr.slice(middle));
    return merge(left, right);
  }
}

  //this helper function is doing all the heavy lifting
 function merge(left, right) { 
 	console.log('left:', left.length)
   let mergeArray = [],
       leftIndex = 0,
       rightIndex = 0;
       //while the counters are less than the lengths of the arrays
	while (leftIndex < left.length && rightIndex < right.length) {
		// put the smaller value in to the mergeArray
		if (left[leftIndex] < right[rightIndex]) {
			 mergeArray.push(left[leftIndex])
			 // increment
			leftIndex += 1;
		}else{
		  // the other array was smaller or possibly the same size
			mergeArray.push(right[rightIndex])
			rightIndex += 1;
		}
	}
	// put them back together 
	// you want to slice where the indexes are pointing
	let rest = right.slice(rightIndex).concat(left.slice(leftIndex))
	return mergeArray.concat(rest)
}
