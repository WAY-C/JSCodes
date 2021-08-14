// 翻译二进制字符串
// 请实现一个函数，把传入的二进制字符串转换成英文句子。

// 二进制字符串会以空格分隔。
function binaryAgent(str) {
    let arr = str.split(" ");
    let sentence = String.fromCharCode(...arr.map((val) => parseInt(val, 2)));
    return sentence;
}
