// JZ24 二叉树中和为某一值的路径
// 描述
// 输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
// 示例1
// 输入：
// {10,5,12,4,7},22
// 返回值：
// [[10,5,7],[10,12]]

// 示例2
// 输入：
// {10,5,12,4,7},15
// 返回值：
// []
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
    let res = [];
    let path = [];
    // 先序遍历，回溯算法
    function recur(root, sum) {
        if (root == null) {
            return;
        }
        // path记录当前路径各结点的val
        path.push(root.val);
        sum -= root.val;
        // 如果符合要求，将当前path加入res数组
        if (sum == 0 && root.left == null && root.right == null) {
            res.push(path.slice(0));
            // 因为path数组是一个对象，需要深拷贝
        }
        recur(root.left, sum);
        recur(root.right, sum);
        path.pop();
    }
    recur(root, expectNumber);
    return res;
}

module.exports = {
    FindPath: FindPath
};