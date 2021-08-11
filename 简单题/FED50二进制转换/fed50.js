// FED50二进制转换

// 描述
// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。

// 示例1
// 输入：
// 65

// 输出：
// 01000001

function convertToBinary(num) {
    // 方法1 使用toString(),split(),unshift(),join()
    // 若二进制不足8位
    if (num < 256) {
        // 使用toString(2)转换成二进制字符串，
        // 然后用split("")分割成字符串数组
        let binaryStrArr = num.toString(2).split("");
        // 字符串数组长度小于8时给前面unshift ‘0’
        while (binaryStrArr.length < 8) {
            binaryStrArr.unshift('0');
        }
        // 返回字符串数组连接成的字符串
        return binaryStrArr.join("");
    }
    // 否则
    return num.toString(2);

    // // 方法2 新建一个8个'0'组成的字符串
    // // 使用toString(2)将给定数字转换成二进制字符串
    // // 根据该字符串的长度与0进行拼接
    // let binaryStr = num.toString(2);
    // if (binaryStr.length < 8) {
    //     return '00000000'.slice(binaryStr.length) + binaryStr;
    // }
    // return binaryStr;

    // // 方法3 直接将'00000000'与字符串形式的二进制数拼接，返回后8位
    // return ('00000000' + num.toString(2)).slice(-8);
    // // 缺点是仅适用于原数字小于8的情况,可修改如下：
    // if (num < 256) {
    //     return ('00000000' + num.toString(2)).slice(-8);
    // }
    // return num.toString(2);
}