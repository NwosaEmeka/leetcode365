/*
You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

 

Example 1:

Input: nums = [1,2,3,3]
Output: 3
Example 2:

Input: nums = [2,1,2,5,3,2]
Output: 2
Example 3:

Input: nums = [5,1,5,2,5,3,5,4]
Output: 5
*/

/*
 SOLUTION
We can solve this problem by using a Set to keep track of the elements we have seen so far. 
As we iterate through the nums array, we check if the current element is already in the Set. 
If it is, we return that element as it is the one that is repeated n times. 
If it is not in the Set, we add it to the Set and continue iterating.

This approach ensures that we find the repeated element in a single pass through the array, 
resulting in a time complexity of O(n) and a space complexity of O(n) in the worst case.
*/

const repeatedNTimes = (nums) => {
  const numSet = new Set();

  for (const n of nums) {
    if (numSet.has(n)) {
      return n;
    }

    numSet.add(n);
  }
};

console.log(repeatedNTimes([1, 2, 3, 3])); // 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); // 2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); // 5
