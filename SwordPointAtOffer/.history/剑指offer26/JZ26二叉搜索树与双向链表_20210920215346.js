// 描述
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 注意:
// 1.要求不能创建任何新的结点，只能调整树中结点指针的指向。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继
// 2.返回链表中的第一个节点的指针
// 3.函数返回的TreeNode，有左右指针，其实可以看成一个双向链表的数据结构
// 4.你不用输出双向链表，程序会根据你的返回值自动打印输出
// 输入描述：
// 二叉树的根节点
// 返回值描述：
// 双向链表的其中一个头节点。
// 示例1
// 输入：
// {10,6,14,4,8,12,16}
// 返回值：
// From left to right are:4,6,8,10,12,14,16;From right to left are:16,14,12,10,8,6,4;
// 说明：
// 输入题面图中二叉树，输出的时候将双向链表的头节点返回即可。    
// 示例2
// 输入：
// {5,4,#,3,#,2,#,1}
// 返回值：
// From left to right are:1,2,3,4,5;From right to left are:5,4,3,2,1;
// 说明：
//                     5
//                   /
//                 4
//               /
//             3
//           /
//         2
//       /
//     1
// 树的形状如上图
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// https://blog.nowcoder.net/n/deb229bdd5b64f0d93d6bfcfa1dd6cd2?f=comment
function Convert(pRootOfTree) {
    let head = null;
    let pre = null;
    function MediumOrderDFS(cur) {
        if (cur === null) {
            return;
        }
        // 递归左结点
        MediumOrderDFS(cur.left);
        // 处理当前结点
        if (pre === null) {
            head = cur;
        } else {
            pre.right = cur;
        }
        cur.left = pre;
        pre = cur;
        // 遍历右结点
        MediumOrderDFS(cur.right);
    }
    MediumOrderDFS(pRootOfTree);
    return head;

}
module.exports = {
    Convert: Convert
};