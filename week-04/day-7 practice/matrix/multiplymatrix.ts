'use strict';
/*Multiply items in a matrix
Write a method that takes a matrix as a parameter.
The function should:
- multiply each even number by 2 in each even indexed row
- multiply each odd number by 2 in each odd indexed row

Write at least 2 different test cases.
Example:
Input
[
  [1, 3, 6, 2],
  [7, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 3]
]

Output
[
  [1,  3,  12, 4],
  [14, 10, 6,  2],
  [3,  3,  1,  5],
  [18, 0,  10, 6]
]*/

function multiplyRowItems(matrix: number[][]): number[][] {

  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix.length; j++) {
      if (matrix.indexOf(matrix[i]) % 2 == 0 && matrix[i][j] % 2 == 0) {
        matrix[i][j] = matrix[i][j] * 2
      } else if (matrix.indexOf(matrix[i]) % 2 !== 0 && matrix[i][j] % 2 !== 0) {
        matrix[i][j] = matrix[i][j] * 2
      }
    }
  }
  return matrix;
}


console.log(multiplyRowItems([[1, 3, 6, 2], [7, 5, 6, 1], [3, 3, 1, 5], [9, 0, 5, 3]]));
console.log(multiplyRowItems([[1,2],[1,2]]));

export { multiplyRowItems };