// 描述
// 输入一个长度为的链表，设链表中的元素的值为a_i，
// 输出一个链表，该输出链表包含原链表中从倒数第k个结点至尾节点的全部节点。
// 如果该链表长度小于k，请返回一个长度为 0 的链表。
// 提示:
// 0 <= n <= 10 ^ 5
// 0 <= a_i <= 10 ^ 9
// 0 <= k <= 10 ^ 9
// 示例1
// 输入：
// { 1, 2, 3, 4, 5 }, 3
// 返回值：
// { 3, 4, 5 }

// 示例2
// 输入：
// { 2 }, 8
// 返回值：
// { }

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
function FindKthToTail(pHead, k) {
    // write code here
    // 双指针
    if (pHead == null || k == 0) {
        return null;
    }
    let first = new ListNode(pHead.val);
    first.next = pHead.next;
    while (--k > 0) {
        console.log(first.next);
        if (first.next == null) {
            return null;
        }
        first.val = first.next.val;
        first.next = first.next.next;
    }
    let second = new ListNode(pHead.val);
    second.next = pHead.next;
    while (first.next !== null) {
        console.log(second.next);
        first.val = first.next.val;
        first.next = first.next.next;
        second.val = second.next.val;
        second.next = second.next.next;
    }
    return second;

    //解法2 
    // 数组模拟栈
    // if (pHead === null || k === 0) {
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
    // while (--k > 0) {
    //     stack.pop();
    //     if (stack.length === 0) {
    //         return null;
    //     }
    // }
    // return stack.pop();
}
module.exports = {
    FindKthToTail: FindKthToTail
};