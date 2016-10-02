/*
Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity,
the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Example 

Input
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 
should return an array.
=> [5, 27, 39, 1001]
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
should return [27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
should return [9, 35, 97, 1000000]

*/
function largestOfFour(arr) {
	arr.forEach((arr)=>{
			arr = arr.sort((a,b) =>{return b-a})
	})
	
  
  return arr.map((arr)=>{ return arr[0]});
}


