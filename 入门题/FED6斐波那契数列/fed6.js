//FED6 斐波那契数列
// 描述
// 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等

function fibonacci(n) {
    // 解法1 递归
    // if (n <= 2) {
    //     return 1;
    // } else {
    //     return fibonacci(n - 1) + fibonacci(n - 2);
    // }

    //或使用三目运算符进行递归
    //return n<=2?1:fibonacci(n-1)+fibonacci(n-2);

    // 解法2 循环
    let f1 = 1,
        f2 = 1;
    let temp = f1;
    for (var i = 2; i < n; i++) {
        temp = f1 + f2;
        f1 = f2;
        f2 = temp;
    }
    return f2;
}