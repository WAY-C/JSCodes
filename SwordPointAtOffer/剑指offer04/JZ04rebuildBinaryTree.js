/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
let pos = {};
function reConstructBinaryTree(pre, vin) {
    // write code here

    let n = pre.length;
    for (let i = 0; i < n; i++) {
        pos[vin[i]] = i;
    }
    return dfs(pre, vin, 0, n - 1, 0, n - 1)
}
function dfs(pre, vin, pl, pr, vl, vr) {
    //前序 根左右
    //中序 左根右
    if (pl > pr) {
        return null;
    }
    let root = new TreeNode(pre[pl]);
    // 左子树的长度
    let k = pos[pre[pl]] - vl;
    root.left = dfs(pre, vin, pl + 1, pl + k, vl, vl + k - 1);
    root.right = dfs(pre, vin, pl + k + 1, pr, vl + k + 1, vr);
    return root;
}
module.exports = {
    reConstructBinaryTree: reConstructBinaryTree
};