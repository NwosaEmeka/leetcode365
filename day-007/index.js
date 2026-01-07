/*
Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7.

Note that you need to maximize the answer before taking the mod and not after taking it.

*/

const MOD = 1e9 + 7;

var maxProduct = function (root) {
  let totalSum = 0;
  const subtreeSums = [];

  // First pass: calculate total sum and store all subtree sums
  function calculateSubtreeSums(node) {
    if (!node) return 0;
    const leftSum = calculateSubtreeSums(node.left);
    const rightSum = calculateSubtreeSums(node.right);
    const subtreeSum = node.val + leftSum + rightSum;
    subtreeSums.push(subtreeSum);
    return subtreeSum;
  }

  totalSum = calculateSubtreeSums(root);

  // Second pass: find the maximum product
  let maxProduct = 0;
  for (const subSum of subtreeSums) {
    const product = subSum * (totalSum - subSum);
    maxProduct = Math.max(maxProduct, product);
  }

  return maxProduct % MOD;
};
