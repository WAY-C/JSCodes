// FED46且运算

// 描述
// 返回参数 a 和 b 的逻辑且运算结果

// 示例1
// 输入：
// false, true

// 输出：
// false

function and(a, b) {
    // 一般实现
    // 且运算符"&&"的运算规则是：
    // 如果第一个运算子的布尔值为true，
    // 则返回第二个运算子的值（注意是值，不是布尔值）；
    // 如果第一个运算子的布尔值为false，
    // 则直接返回第一个运算子的值，且不再对第二个运算子求值。
    return a && b;

    // // 逻辑与的原理
    // if (a) {
    //     if (b) {
    //         return b;
    //         // return true;
    //     }
    // }
    // return false;

    // // 若要求布尔值
    // return !!(a && b)
    // //如果a为true，b为非Boolean就会返回非Boolean值，所以加一步转换
}