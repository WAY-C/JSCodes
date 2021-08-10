// FED43二次封装函数

// 描述
// 实现函数 partialUsingArguments，调用之后满足如下条件：
// 1、返回一个函数 result
// 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
// 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数

// 示例1
// 输入：
// 无

// 输出：
// 无

function partialUsingArguments(fn) {
    // 解法1 使用bind
    // 将arguments转换成数组并去除第一个元素
    let args = [].slice.call(arguments, 1);
    // 使用bind返回一个函数给result
    let result = fn.bind(null, ...args);
    // 注意bind后面参数和call一样，是“arg1, arg2, ...”的形式
    // 这里使用...args进行拓展
    return result;

    // // 解法2 使用解构赋值和括号函数
    // const [f, ...res] = arguments;
    // return (...rest) => fn(...res, ...rest);
    // //返回一个函数result
    // //fn 的调用参数为 partialUsingArguments 
    // //的第一个参数之后的全部参数以及 result 的调用参数
}