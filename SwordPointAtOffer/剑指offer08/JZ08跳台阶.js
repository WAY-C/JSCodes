// 描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
// 示例1
// 输入：
// 2
// 返回值：
// 2

// 示例2
// 输入：
// 7
// 返回值：
// 21
function jumpFloor(number) {
    // write code here
    // 假定第一次跳的是一阶，那么剩下的是n-1个台阶，跳法是f(n-1);
    // 假定第一次跳的是2阶，那么剩下的是n-2个台阶，跳法是f(n-2)
    if (number == 1) {
        return 1;
    } else if (number == 2) {
        return 2;
    }
    return jumpFloor(number - 1) + jumpFloor(number - 2);
}
module.exports = {
    jumpFloor: jumpFloor
};