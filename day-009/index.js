/*
Given the root of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is a tree consisting of that node, plus the set of all descendants of that node.
*/

var subtreeWithAllDeepest = function (root) {
  function dfs(node) {
    if (!node) return { depth: 0, subtree: null };

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left.depth > right.depth) {
      return { depth: left.depth + 1, subtree: left.subtree };
    } else if (right.depth > left.depth) {
      return { depth: right.depth + 1, subtree: right.subtree };
    } else {
      return { depth: left.depth + 1, subtree: node };
    }
  }

  return dfs(root).subtree;
};
