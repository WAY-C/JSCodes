// 描述
// 输入一个链表，反转链表后，输出新链表的表头。
// 示例1
// 输入：
// {1,2,3}
// 复制
// 返回值：
// {3,2,1}

function ListNode(x) {
    this.val = x;
    this.next = null;
}
function ReverseList(pHead) {
    // write code here
    // // 解法1 数组实现
    // if (pHead === null) {
    //     return null;
    // }
    // let stack = [pHead];
    // let node = new ListNode(pHead.val);
    // node.next = pHead.next;
    // while (node.next !== null) {
    //     stack.push(node.next);
    //     node.val = node.next.val;
    //     node.next = node.next.next;
    // }
    // stack.map((ele,index,arr) => {
    //     if(index === 0) {
    //         ele.next = null;
    //     } else {
    //         ele.next = arr[index-1];
    //     }
    // })
    // return stack.pop();
    // 解法2 使用temp遍历一遍
    let p1 = pHead;
    let p2 = null;
    while (p1.next != null) {
        let temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
    }
    return p2;
}
module.exports = {
    ReverseList: ReverseList
};