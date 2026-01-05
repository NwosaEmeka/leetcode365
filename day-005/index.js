/*
You are given an n x n integer matrix. You can do the following operation any number of times:

Choose any two adjacent elements of matrix and multiply each of them by -1.
Two elements are considered adjacent if and only if they share a border.

Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above.

 

Example 1:


Input: matrix = [[1,-1],[-1,1]]
Output: 4
Explanation: We can follow the following steps to reach sum equals 4:
- Multiply the 2 elements in the first row by -1.
- Multiply the 2 elements in the first column by -1.
Example 2:


Input: matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]
Output: 16
Explanation: We can follow the following step to reach sum equals 16:
- Multiply the 2 last elements in the second row by -1.

*/

/*SOLUTION
To maximize the sum of the matrix's elements, we can follow these steps:

1. Calculate the absolute sum of all elements in the matrix. This gives us the maximum possible sum if we could make all elements positive.

2. Count the number of negative elements in the matrix. If this count is even, we can convert all negative elements to positive without any issues, 
and the total sum will be the absolute sum calculated in step 1.

3. If the count of negative elements is odd, we will have one negative element left after making pairs of negatives positive. 
To minimize the impact on the total sum, we should leave the smallest absolute value element as negative. Therefore, we subtract twice the smallest absolute value from the total sum (once to remove it from the absolute sum and once more to account for it being negative).

4. Return the final calculated sum.
*/

const maxMatrixSum = (matrix) => {
  let totalSum = 0;
  let negativeCount = 0;
  let minAbsValue = Infinity;

  for (let row of matrix) {
    for (value of row) {
      const absValue = Math.abs(value);
      totalSum += absValue;
      if (value < 0) {
        negativeCount++;
      }
      minAbsValue = Math.min(minAbsValue, absValue);
    }
  }

  return negativeCount % 2 === 0 ? totalSum : totalSum - 2 * minAbsValue;
};

// Example usage:
console.log(
  maxMatrixSum([
    [1, -1],
    [-1, 1],
  ])
); // Output: 4
console.log(
  maxMatrixSum([
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
  ])
); // Output: 16
