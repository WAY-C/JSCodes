// 求斐波那契数列中的奇数之和
// 在这道题目中，我们需要写一个函数，参数为一个正整数 num，返回值为斐波那契数列中，小于或等于 num 的奇数之和。

// 斐波那契数列中，第一和第二个数字都是 1。 
// 后面的每个数字由之前两数相加得出。 斐波那契数列的前六个数字分别为：1、1、2、3、5、8。

// 比如，sumFibs(10) 应该返回 10。 因为斐波那契数列中，比 10 小的数字只有 1、1、3、5。

// 解法1 边构造斐波那契数，边求和
function sumFibs(num) {
    let numb = parseInt(num, 10);
    let [last, cur, sum] = [0, 1, 0];
    while (cur <= numb) {
        if (cur % 2 !== 0) {
            sum += cur;
        }
        cur += last;
        last = cur - last;
    }
    return sum;
}

// 解法2 构造斐波那契数列，然后判断奇数并求和
/*
function fibs(num) {
    let fib = [1, 1];
    let last1 = 1;
    let last2 = 1;
    let cur = 2;
    while (cur <= num) {
        fib.push(cur);
        last1 = last2;
        last2 = cur;
        cur = last1 + last2;
    }
    return fib;
}

function sumFibs(num) {
    let numb = parseInt(num, 10);
    if (numb == 1) {
        return 1;
    }
    let fib = fibs(numb);
    let odd = [];
    for (let f of fib) {
        if (f % 2 != 0) {
            odd.push(f);
        }
    }
    return odd.reduce((sum, val) => sum += val, 0);
}*/

sumFibs(4);
