/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(root1, root2) {
    let res = false;
    //当root1和root2都不为null的时候，才进行比较。否则直接返回false
    if (root1 !== null && root2 !== null) {
        //如果找到了对应root2的根节点的点
        if (root1.val == root2.val) {
            //以这个根节点为为起点判断是否包含root2
            res = isInclude(root1, root2);
        }
        // 不能在上一步直接return因为有可能找不到，找不到需要接着找而不是直接return
        if (!res) {
            //如果找不到，那么就再去root1的左儿子当作起点，去判断时候包含root2
            res = HasSubtree(root1.left, root2) || HasSubtree(root1.right, root2);
        }
    }
    return res;
}
function isInclude(tree1, tree2) {
    if (tree2 == null) {
        return true;
    }
    if (tree1 == null) {
        return false;
    }
    if (tree1.val !== tree2.val) {
        return false;
    }
    return isInclude(tree1.left, tree2.left) && isInclude(tree1.right, tree2.right)
}
module.exports = {
    HasSubtree: HasSubtree
};