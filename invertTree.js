/**
 * 翻转二叉树
 * @param {TreeNode} root 
 * @return {TreeNode} 
 */

// 递归
function invertBinaryTree(root) {
    if (root == null) return root;

    let temp = root.left;
    root.left = invertBinaryTree(root.right);
    root.right = invertBinaryTree(temp);

    return root;
}

// 非递归
function invertBinTree(root) {
    if (root == null) return root;

    let curNode = null;
    let queue = [];
    queue.push(root);

    while ((curNode = queue.shift()) != null) {
        let temp = curNode.left;
        curNode.left = curNode.right;
        curNode.right = temp;

        if (curNode.left != null) {
            queue.push(curNode.left);
        }

        if (curNode.right != null) {
            queue.push(curNode.right);
        }
    }

    return root;
}

// VSCode debugger node.js环境下测试，所以用的CommonJS形式
const BST = require('./BST.js');
let testTree = BST.testTree;
BST.inOrderTraversal(testTree);
invertBinaryTree(testTree);
BST.inOrderTraversal(testTree);
invertBinTree(testTree);
BST.inOrderTraversal(testTree);