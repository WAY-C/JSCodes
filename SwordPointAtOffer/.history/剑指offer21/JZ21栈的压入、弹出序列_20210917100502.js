// 描述
// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数，
// 并且调用 min函数、push函数 及 pop函数 的时间复杂度都是 O(1)
// push(value):将value压入栈中
// pop():弹出栈顶元素
// top():获取栈顶元素
// min():获取栈中最小元素
// 示例:
// 输入:    ["PSH-1","PSH2","MIN","TOP","POP","PSH1","TOP","MIN"]
// 输出:    -1,2,1,-1
// 解析:
// "PSH-1"表示将-1压入栈中，栈中元素为-1
// "PSH2"表示将2压入栈中，栈中元素为2，-1
// “MIN”表示获取此时栈中最小元素==>返回-1
// "TOP"表示获取栈顶元素==>返回2
// "POP"表示弹出栈顶元素，弹出2，栈中元素为-1
// "PSH-1"表示将1压入栈中，栈中元素为1，-1
// "TOP"表示获取栈顶元素==>返回1
// “MIN”表示获取此时栈中最小元素==>返回-1

// 示例1
// 输入：
//  ["PSH-1","PSH2","MIN","TOP","POP","PSH1","TOP","MIN"]
// 复制
// 返回值：
// -1,2,1,-1

let stack = [];
let mins = [];
function push(node) {
    // write code here
    stack.push(node);
    if (mins.length == 0) {
        mins.push(node);
    } else if (node <= mins[mins.length - 1]) {
        mins.push(node);
    }
}
function pop() {
    // write code here
    if (stack[stack.length - 1] == mins[mins.length - 1]) {
        mins.pop();
    }
    return stack.pop();
}
function top() {
    // write code here
    return stack[stack.length - 1];
}
function min() {
    // write code here
    let temp = mins.pop();
    mins.push(temp);
    return temp;
}
module.exports = {
    push: push,
    pop: pop,
    top: top,
    min: min
};