// FED60判断是否符合USD格式描述
// 给定字符串 str，检查其是否符合美元书写格式
// 1、以 $ 开始
// 2、整数部分，从个位起，满 3 个数字用 , 分隔
// 3、如果为小数，则小数部分长度为 2
// 4、正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3

// 示例1
// 输入：
// '$20,933,209.93'

// 输出：
// true
function isUSD(str) {
    let regex = /^\$(([1-9]\d{0,2}(\,\d{3})*)|0)(\.\d{2})?$/;
    // 按照常识最高位数字不应该为0
    // 这里写 ()|0 是考虑整数部分只有0的情况
    return regex.test(str);
    // 也可只写一句return：
    // return /^\$(([1-9]\d{0,2}(\,\d{3})*)|0)(\.\d{2})?$/.test(str);
}