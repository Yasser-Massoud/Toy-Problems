/*
Rotate Matrix
Write a function that rotates a NxN matrix 90 degrees clockwise.
A matrix, also called a 2-D array, is simply an array of arrays of values.

2x2 MATRIX EXAMPLE:

[ [1, 2],
[3, 4] ]

Rotated:

[ [3, 1],
[4, 2] ]

4x4 MATRIX EXAMPLE:

[ [ 1, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9, “A”,”B”,”C”],
[“D”,”E”,”F”,”G”] ]

Rotated:

[ [“D”, 9, 5, 1],
[“E”, “A”, 6, 2],
[“F”,”B”, 7, 3],
[“G”,”C”, 8, 4] ]

EXTRA CREDIT
- Make your function operate on rectangular matrices (MxN rather than NxN).
- Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)

Important note:
In mathematics, and generally in CS, matrices are identified as m-by-n, where m is the number of rows and n is the number of columns. So an [i][j] address in a matrix will be i places down, and j places over. This usually matches the way arrays are addressed in code, but keep in mind that it differs from use in geometry and computer graphics, where coordinates of the form (x,y) are usually x units over, and y units down.

Examples

Input															Output
matrix:
[ 																[	
	[ 1, 2, 3, 4 ],										[ "D", 9, 5, 1 ], 
	[ 5, 6, 7, 8 ], 									[ "E", "A", 6, 2 ],
	[ 9, "A", "B", "C" ], 						[ "F", "B", 7, 3 ],
	[ "D", "E", "F", "G" ] 			   		[ "G", "C", 8, 4 ] 
]																	]

matrix:
[ [ 1 ] ]													[ [ 1 ] ]

matrix:
[ [ 1, 2 ], [ 3, 4 ] ]						[ [ 3, 1 ], [ 4, 2 ] ]

matrix:
[ [ 1, 2, 3 ],										[ [ 7, 4, 1 ],
  [ 4, 5, 6 ],											[ 8, 5, 2 ],
  [ 7, 8, 9 ]											  [ 9, 6, 3 ] 
] 																]
*/

///Solutions///

function rotateMatrix (matrix) {
  // Empty matrix to be returned.
  var result = [];
  var size = matrix.length;
  
  for (var j=0; j<size; j++) {
    for (var i=0; i<size; i++) {
      // If not an array, make a new one.
      if(! Array.isArray(result[j])) {
        result[j] = [];
      }
      
      // result[j] will be a column (and move left -> right)
      // matrix[i][j] will find the rotated value and unshift
      result[j].unshift(matrix[i][j])
    }
  }
  
  return result;
}
	   