// FED8获取字符串的长度

// 描述
// 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
// 否则如果字符 Unicode 编码 > 255 则长度为 2

// 示例1
// 输入：
// 'hello world, 牛客', false

// 输出：
// 17

function strLength(s, bUnicode255For1) {
    // 解法1 正则表达式
    return s.length + (bUnicode255For1 === true ? 0 :
        (s.match(/[\u0256-\uffff]/g) || []).length);

    // // 解法2 使用 charCodeAt() 获取字符的Unicode编码大小
    // if (bUnicode255For1 === true) {
    //     return s.length;
    // }
    // let sum = 0;
    // for (let i = 0; i < s.length; i++) {
    //     if (s.charCodeAt(i) > 255) {
    //         sum++;
    //     }
    // }
    // return s.length + sum;
}