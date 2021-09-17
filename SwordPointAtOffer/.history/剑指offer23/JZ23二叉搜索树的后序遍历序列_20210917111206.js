// 描述
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
// 如果是则返回true,否则返回false。
// 假设输入的数组的任意两个数字都互不相同。（ps：我们约定空树不是二叉搜索树）
// 示例1
// 输入：
// [4,8,6,12,16,14,10]

// 返回值：
// true

// 非递归做法：
function VerifySquenceOfBST(sequence) {
    // write code here
    // 后序遍历顺序：左右根
    // 二叉搜索树：当前结点左子树所有结点值小于当前结点值，右子树所有结点值大于当前结点值
    // 题目约定空树不是二叉搜索树
    if (sequence.length == 0) {
        return false;
    }
    // roots数组模拟一个栈依次存放各层祖辈节点的值，
    // 事先放入一个infinity避免对空栈的判断
    let roots = [Infinity];
    // 定义一个max变量来作为子树的上界，不断用祖先值更新它
    let max = Infinity;
    // 后序遍历的最后一个值为根结点，所以倒序遍历
    for (let i = sequence.length - 1; i >= 0; i--) {
        if (sequence[i] > max) {
            //超过上界，相当于左子树大于根结点，则必不符合条件
            return false;
        }
        // 如果结点值小于roots的栈顶，说明该节点是某个祖辈的左孩子
        while (sequence[i] < roots[roots.length - 1]) {
            // 不断出栈，直到找出该祖辈，同时，该祖辈也提供了新的max约束
            max = roots[roots.length - 1];
            roots.pop();
        }
        // 该节点成了新一代的祖辈节点，为后续节点判断自己的位置提供依据
        roots.push(sequence[i]);
    }
    return true;
}
module.exports = {
    VerifySquenceOfBST: VerifySquenceOfBST
};