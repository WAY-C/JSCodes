// FED48二进制转换

// 描述
// 获取数字 num 二进制形式第 bit 位的值。注意：
// 1、bit 从 1 开始
// 2、返回 0 或 1
// 3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1

// 示例1
// 输入：
// 128, 8

// 输出：
// 1

function valueAtBit(num, bit) {
    // 解法1 将num转变成二进制字符数组
    let binary = num.toString(2).split("");
    return binary[binary.length - bit];

    // // 解法2 利用位运算符‘&’
    // return num & Math.pow(2,bit-1) ? 1 : 0;

    // // 解法3 与解法2类似，多用一个位运算符“>>”
    // return (num >> (bit-1)) & 1; 
}