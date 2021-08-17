// FED35流程控制
// 描述
// 实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
// 1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 2、如果 num 能被 3 整除，返回字符串 fizz
// 3、如果 num 能被 5 整除，返回字符串 buzz
// 4、如果参数为空或者不是 Number 类型，返回 false
// 5、其余情况，返回参数 num

// 示例1
// 输入：
// 15

// 输出：
// fizzbuzz

function fizzBuzz(num) {
    let str = '';
    // 最佳选择是Object.prototype.toString
    // if(Object.prototype.toString.call(num) !== "[object Number]") {
    if (typeof num !== 'number') {
        return false;

    } else if (num === null) {
        return false;
    } else {
        if (num % 3 == 0) {
            str += 'fizz';
        }
        if (num % 5 == 0) {
            str += 'buzz';
        }
        return str == '' ? num : str;
    }
}