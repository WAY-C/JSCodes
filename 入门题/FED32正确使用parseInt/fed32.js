// FED32正确使用parseInt

// 描述
// 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
/*  function parse2Int(num) {
        return parseInt(num);
    }
*/

// 示例1
// 输入：
// '12'

// 输出：
// 12

// 示例2
// 输入：
// '12px'

// 输出：
// 12

// 示例3
// 输入：
// '0x12'

// 输出：
// 0

function parse2Int(num) {
    // 解法1 补全参数使之只按10进制识别
    // parseInt(string, radix) 当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。
    // 举例，如果 string 以 "0x" 开头，
    // parseInt() 会把 string 的其余部分解析为十六进制的整数。
    // 如果 string 以 0 开头，
    // 那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为
    // 八进制或十六进制的数字。
    // 如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。
    return parseInt(num, 10);

    // // 解法2 
    // // 正则处理方法1
    // return parseInt(num.match(/^(\d+)/)[0]);
    // // 正则处理方法2
    // var regex=/^\d+/;
    // num=regex.exec(num)[0];
    // return parseInt(num);
}