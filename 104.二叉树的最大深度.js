/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0
  const tra = (root, depth) => {
    if (!root) {
      max = Math.max(max, depth)
      return
    }
    tra(root.left, depth + 1)
    tra(root.right, depth + 1)
  }
  tra(root, 0)
  return max
};
// @lc code=end

