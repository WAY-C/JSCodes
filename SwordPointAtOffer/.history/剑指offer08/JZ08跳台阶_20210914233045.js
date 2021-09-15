// 描述
// 大家都知道斐波那契数列(f(n) = f(n-1)+f(n-2))，现在要求输入一个整数n，
// 请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
// n <= 39
// 0 1 1 2 3 5 8...
// 示例1
// 输入：
// 4
// 返回值：
// 3
function Fibonacci(n) {
    // write code here
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }

    // n>=2的情况
    let a = 0;
    let b = 1;
    let res = 0;
    for (let i = 2; i <= n; i++) {
        res = a + b;
        a = b;
        b = res;
    }
    return res;
}
module.exports = {
    Fibonacci: Fibonacci
};