// 描述
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
// 示例1
// 输入：
// {5,4,#,3,#,2,#,1}
// 返回值：
// [5,4,3,2,1]

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function PrintFromTopToBottom(root) {
    // write code here
    let res = [];    // 存放打印结果
    if (root == null) {
        return res;    // 空树返回空
    }
    let queue = [];    // 队列存放待打印的结点
    queue.push(root);    // 根结点入队
    while (queue.length !== 0) {
        let temp = new TreeNode(queue[0].val);
        temp = queue[0];    // 当前操作的是队列第一个结点
        res.push(temp.val);    // 结点值存入结果
        if (temp.left !== null) {
            queue.push(temp.left);    // 结点左子结点入队列
        }
        if (temp.right !== null) {
            queue.push(temp.right);    // 结点右子节点入队列
        }
        queue.shift(); // 当前结点出队列，操作下一结点
    }
    return res;
}
module.exports = {
    PrintFromTopToBottom: PrintFromTopToBottom
};