/**
 *  百度2017年春季实习生招聘一面时问到的一道题；
 *  给定数组，生成二叉查找树(可选择前序，中序或后序输出二叉树数列)
 * @param {array} arr 
 * @return {object} tree 
 */
function binarySearchTree(arr) {
    if (!Array.isArray(arr)) return;
    if (arr.length === 0) return null;

    arr = quickSort(arr);
    let result = [];
    let mid = Math.floor(arr.length / 2);
    let root = new TreeNode(arr[mid], null, null);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid + 1);

    root.left = binarySearchTree(left);
    root.right = binarySearchTree(right);

    return root;
}

// 快排，升序
function quickSort(arr) {
    if (!Array.isArray(arr)) return;
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let midValArr = arr.splice(mid, 1);
    let left = [];
    let right = [];

    arr.forEach(item => {
        if (item <= midValArr[0]) {
            left.push(item)
        } else {
            right.push(item)
        }
    });

    return quickSort(left).concat(midValArr, quickSort(right));
}

// 树节点的构造函数
function TreeNode(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

// 中序遍历
function inOrder(node, callback) {
    if (node != null) {
        inOrder(node.left, callback);
        callback(node.data);
        inOrder(node.right, callback);
    }
}
// 前序遍历
function preOrder(node, callback) {
    if (node != null) {
        callback(node.data);
        preOrder(node.left, callback);
        preOrder(node.right, callback);
    }
}
// 后序遍历
function postOrder(node, callback) {
    if (node != null) {
        postOrder(node.left, callback);
        postOrder(node.right, callback);
        callback(node.data);
    }
}

// 测试
let testArray = [12, 43, 8, 5, 90, 232, 0, -8, 666];
let BSTree = binarySearchTree(testArray);
console.log('Binary Search Tree: ', BSTree);

// function print(val) {
//     console.log(val);
// }

// inOrder(BSTree, print);
// preOrder(BSTree, print);
// postOrder(BSTree, print);

let inArr = [];
let preArr = [];
let postArr = [];
function save2arr(val) {
    let that = this;
    if (!Array.isArray(that)) {
        that = [];
    }
    that.push(val);
    return that;
}
inOrder(BSTree, save2arr.bind(inArr));
preOrder(BSTree, save2arr.bind(preArr));
postOrder(BSTree, save2arr.bind(postArr));
console.log('inOrder: ', inArr);
console.log('preOrder: ', preArr);
console.log('postOrder: ', postArr);