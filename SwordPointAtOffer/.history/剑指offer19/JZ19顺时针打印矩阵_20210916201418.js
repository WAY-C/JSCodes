// 操作给定的二叉树，将其变换为源二叉树的镜像。
// 比如：    源二叉树 
//             8
//            /  \
//           6   10
//          / \  / \
//         5  7 9 11
//         镜像二叉树
//             8
//            /  \
//           10   6
//          / \  / \
//         11 9 7  5
// 示例1
// 输入：
// {8,6,10,5,7,9,11}
// 返回值：
// {8,10,6,11,9,7,5}

/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pRoot TreeNode类 
 * @return TreeNode类
 */
function Mirror(pRoot) {
    // write code here
    if (pRoot == null) {
        return null;
    }
    if (pRoot.left == null && pRoot.right == null) {
        return pRoot;
    } else {
        let temp = new TreeNode(0);
        temp = pRoot.right;
        pRoot.right = Mirror(pRoot.left);
        pRoot.left = Mirror(temp);
    }
    return pRoot;
}
module.exports = {
    Mirror: Mirror
};