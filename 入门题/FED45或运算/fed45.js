// FED45或运算

// 描述
// 返回参数 a 和 b 的逻辑或运算结果

// 示例1
// 输入：
// false, true

// 输出：
// true

function or(a, b) {
    // 常规解法
    return a || b;

    // // 因为3||4返回的结果是3，若要求返回布尔值
    // return a || b ? true : false;
    // return !!(a || b);
    // return Boolean(a || b);

    // // 位运算符：|  不是很符合本题题意
    // // 运算方法：
    // // 两个位只要有一个为1，那么结果都为1。否则就为0
    // return a | b;

    // // 逻辑或的原理
    // if (a) {
    //     return a;
    //     // return true;
    // } else {
    //     return b;
    //     // return false;
}