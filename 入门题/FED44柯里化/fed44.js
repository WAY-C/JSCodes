// FED44柯里化

// 描述
// 已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
// 1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
// 2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
// 3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
// 4、调用 c 之后，返回的结果与调用 fn 的返回值一致
// 5、fn 的参数依次为函数 a, b, c 的调用参数

// 示例1
// 输入：
// var fn = function (a, b, c) {return a + b + c}; curryIt(fn)(1)(2)(3);

// 输出：
// 6

function curryIt(fn) {
    // 柯里化是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，
    // 并且返回接受余下的参数且返回结果的新函数的技术。
    // 简单理解题目意思，就是指，
    // 我们将预定义的函数的参数逐一传入到curryIt中，当参数全部传入之后，就执行预定义函数。

    // 严格要求每次只传一个参数的柯里化实现
    let args = [];
    return function result(arg) {
        args.push(arg);
        if (args.length >= fn.length) {
            return fn.call(this, ...args);
            // return fn.apply(this, args);
        } else {
            return function(newArg) {
                return result.call(this, newArg);
            }
        }
    }

    // // 不使用arguments.callee 的方法，用变量名代替了，大同小异：
    // let length = fn.length,
    //     args = [];
    // let result = function(arg) {
    //     args.push(arg);
    //     length--;
    //     if (length <= 0) {
    //         return fn.apply(this, args);
    //     } else {
    //         return result;
    //     }
    // }
    // return result;
}