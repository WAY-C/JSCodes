// FED41使用arguments

// 描述
// 函数 useArguments 可以接收 1 个及以上的参数。
// 请实现函数 useArguments，返回所有调用参数相加后的结果。
// 本题的测试参数全部为 Number 类型，不需考虑参数转换。

// 示例1
// 输入：
// 1, 2, 3, 4

// 输出：
// 10

function useArguments() {
    //arguments能获得函数对象传入的参数组，类似与一个数组，
    // 能够通过length获取参数个数，
    // 能通过下标获取该位置的参数，
    // 但是它不能使用forEach等方法。

    // arguments是类数组，不具备数组方法 使用"..."拓展arguments成为数组
    //let arr = [...arguments];
    return [...arguments].reduce((sum, cur) => sum += cur, 0);
    //return arr.reduce((sum, cur) => sum += cur, 0);

    // 转换成数组后使用eval
    // eval() 函数计算 JavaScript 字符串，并把它作为脚本代码来执行。
    // 如果参数是一个表达式，eval() 函数将执行表达式。
    // 如果参数是Javascript语句，eval()将执行 Javascript 语句。
    var arr = Array.prototype.slice.call(arguments) //把arguments类数组转化为数组
    return eval(arr.join("+")); //求和

    // 常规for循环
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;


}