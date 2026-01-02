/* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/

/*
SOLUTION
Three scnarios to consider: Last digit less than 9, Last digit is 9, All digits are 9

We can solve this problem by iterating through the digits array from the last element to the first. If the current digit is less than 9, 
we can simply increment it by 1 and return the array. 
If the current digit is 9, we set it to 0 and continue to the next digit. 
If we finish the loop and all digits were 9, we need to add a new digit at the beginning of the array with value 1.

This approach ensures that we handle carry-over correctly when incrementing the number represented by the array.
*/
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);

  return digits;
};

console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([9, 9, 9])); // [1,0,0,0]
