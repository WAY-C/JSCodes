// FED56检查重复字符串

// 描述
// 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false

// 示例1
// 输入：
// 'rattler'

// 输出：
// true
function containsRepeatingLetter(str) {
    // // 解法1 循环加正则表达式
    // let strArr = str.split("");
    // let regex = /[a-z]/i;
    // for(let i = 0; i < strArr.length; i++) {
    //     if (strArr[i] === strArr[i+1] && regex.test(strArr[i])) {
    //         return true;
    //     }
    // }
    // return false;

    // 解法2 正则表达式的 () 用法和 \ 用法
    return /([a-zA-Z])\1/.test(str);
    // \1表示对第一个圆括号内容的引用
    // 此处相当于匹配 aa -- zz和AA -- ZZ 其中两个字母都一样
    // \2表示对第一个圆括号内容的引用
}