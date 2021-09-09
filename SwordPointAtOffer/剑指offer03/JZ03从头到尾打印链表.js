// JZ03从头到尾打印链表
// 描述
// 输入一个链表的头节点，按链表从尾到头的顺序返回每个节点的值（用数组返回）。
// 如输入{1,2,3}的链表，返回一个数组为[3,2,1]，0 <= 链表长度 <= 10000
// 示例1
// 输入：
// {1,2,3}

// 返回值：
// [3,2,1]

// 示例2
// 输入：
// {67,0,24,58}

// 返回值：
// [58,24,0,67]

function Find(target, array) {
    // write code here
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr.reverse();
}
module.exports = {
    Find: Find
};
