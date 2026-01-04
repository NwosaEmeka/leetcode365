/*

Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. 
If there is no such integer in the array, return 0.

 

Example 1:

Input: nums = [21,4,7]
Output: 32
Explanation: 
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.
Example 2:

Input: nums = [21,21]
Output: 64
Example 3:

Input: nums = [1,2,3,4,5]
Output: 0
*/

/*
SOLUTION
To solve this problem, we need to find the divisors of each number in the input array and check if it has exactly four divisors. 
If it does, we sum those divisors and add them to a total sum.

We can achieve this by iterating through each number in the array and for each number, 
we find its divisors by checking all integers from 1 to the square root of the number. 
For each integer that divides the number evenly, we add both the integer and its complementary divisor (number / integer) that's not the sqrt to a list of divisors. 
If at any point we find that the number of divisors exceeds four, we can stop checking further for that number.

Finally, if a number has exactly four divisors, we sum them up and add to our total sum which we return at the end.
*/

const sumFourDivisors = (nums) => {
  let totalSum = 0;

  const getDivisorsSum = (num) => {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        // Check for the complementary divisor that is not the square root
        if (i !== num / i) {
          divisors.push(num / i);
        }
      }
      if (divisors.length > 4) {
        return 0; // Early exit if more than 4 divisors
      }
    }
    return divisors.length === 4 ? divisors.reduce((a, b) => a + b, 0) : 0;
  };

  for (const num of nums) {
    totalSum += getDivisorsSum(num);
  }

  return totalSum;
};
console.log(sumFourDivisors([21, 4, 7])); // 32
console.log(sumFourDivisors([21, 21])); // 64
console.log(sumFourDivisors([1, 2, 3, 4, 5])); // 0
