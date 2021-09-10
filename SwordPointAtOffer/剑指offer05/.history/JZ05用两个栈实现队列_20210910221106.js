// JZ05用两个栈实现队列
// 描述
// 用两个栈来实现一个队列，分别完成在队列尾部插入整数(push)和在队列头部删除整数(pop)的功能。 
// 队列中的元素为int类型。保证操作合法，即保证pop操作时队列内已有元素。

// 示例:
// 输入:
// ["PSH1","PSH2","POP","POP"]
// 返回:
// 1,2
// 解析:
// "PSH1":代表将1插入队列尾部
// "PSH2":代表将2插入队列尾部
// "POP“:代表删除一个元素，先进先出=>返回1
// "POP“:代表删除一个元素，先进先出=>返回2
// 示例1
// 输入：
// ["PSH1","PSH2","POP","POP"]

// 返回值：
// 1,2

var stack1 = [];
var stack2 = [];
function push(node) {
    // write code here
    return stack1.push(node);

}
function pop() {
    // write code here
    if (stack2.length == 0) {
        while (stack1.length !== 0) {
            stack2.push(stack1.pop());
        }
    }
    // 先进先出
    return stack2.pop();
}
module.exports = {
    push: push,
    pop: pop
};