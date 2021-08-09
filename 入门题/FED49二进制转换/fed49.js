// FED49二进制转换

// 描述
// 给定二进制字符串，将其换算成对应的十进制数字

// 示例1
// 输入：
// '11000000'

// 输出：
// 192

function base10(str) {
    // 使用parseInt
    return parseInt(str, 2);

    // 二进制原理计算实现转换
    let decimal = 0;
    for (let i = 0; i < str.length; i++) {
        decimal += str[i] * Math.pow(2, str.length - i - 1);
    }
    return decimal;

    // 使用Number() 方法
    return Number("0b" + str);
}