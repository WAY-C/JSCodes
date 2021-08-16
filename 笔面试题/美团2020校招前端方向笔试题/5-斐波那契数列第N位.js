// 形如1, 1, 2, 3, 5, 8, 13, 21, 34, 55的数列，
// 后一位是前面两位相加（斐波那契数列），
// 写出函数要求找到第 N 位是多少，
// 如：fib(3) => 3 ， fib(5) => 8, 
// 要求时间复杂度为O(n)。

// 提交的代码：
// 0 1 2 3 4
// 1 1 2 3 5
let num = parseInt(readline(), 10);
let last = 0;
let cur = 1;
for (let i = 0; i < num; i++) {
    cur += last;
    last = cur - last;
}
console.log(cur);

// 通过