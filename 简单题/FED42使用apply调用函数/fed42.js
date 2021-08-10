// FED42使用apply调用函数

// 描述
// 实现函数 callIt，调用之后满足如下条件
// 1、返回的结果为调用 fn 之后的结果
// 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数

// 示例1
// 输入：
// 无

// 输出：
// 无

function callIt(fn) {
    // 方法1 使用arguments，利用...拓展将其变为数组
    let args = [...arguments];
    return args[0].apply(this, args.slice(1));

    // // 另一种实现
    // let args = [...arguments];
    // let f = args[0];
    // args.shift();
    // return f.apply(this, args);

    // // 方法2 用Array.prototype.slice.call将参数arguments转为数组，并去掉第一个元素
    // let args = Array.prototype.slice.call(arguments, 1);
    // return fn.apply(null, args);

    // // 另一种实现，用空数组调用.slice.call方法
    // let args = [].slice.call(arguments, 1);
    // return fn.apply(null, args);
}