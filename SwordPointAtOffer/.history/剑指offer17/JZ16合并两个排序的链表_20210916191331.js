// 描述
// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
// 示例1
// 输入：
// {1,3,5},{2,4,6}
// 复制
// 返回值：
// {1,2,3,4,5,6}
function ListNode(x) {
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2) {
    // write code here
    if (pHead1 == null) {
        return pHead2;
    } else if (pHead2 == null) {
        return pHead1;
    }
    let cur = new ListNode(0);
    const root = cur;
    while (pHead1 !== null && pHead2 !== null) {
        if (pHead1.val < pHead2.val) {
            cur.next = pHead1;
            cur = cur.next;
            pHead1 = pHead1.next;
        } else {
            cur.next = pHead2;
            cur = cur.next;
            pHead2 = pHead2.next;
        }
    }
    if (pHead1 !== null) {
        cur.next = pHead1;
    } else {
        cur.next = pHead2;
    }
    return root.next;
}
module.exports = {
    Merge: Merge
};