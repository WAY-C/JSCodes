// FED58获取指定字符串

// 描述
// 给定字符串 str，检查其是否包含 连续3个数字
// 1、如果包含，返回最先出现的 3 个数字的字符串
// 2、如果不包含，返回 false

// 示例1
// 输入：
// '9876543'

// 输出：
// 987

function captureThreeNumbers(str) {
    // 解法1 用正则表达式简单实现
    let ret = str.match(/\d{3}/);
    if (ret) {
        return ret[0];
    }
    return false;
    // // 三元运算符实现
    // return str.match(/\d{3}/) ? str.match(/\d{3}/)[0] : false;

    // // 解法2 遍历字符串数组并用if筛选 不推荐
    // let regex = /[0-9]/;
    // let strArr = str.split("");
    // for(let i = 0; i < strArr.length - 2; i++) {
    //     if (regex.test(strArr[i])) {
    //         if (parseInt(strArr[i+1]) == (1 + parseInt(strArr[i]))) {
    //             if (parseInt(strArr[i+2]) == 1 + parseInt(strArr[i+1])) {
    //                 return strArr.slice(i,i+3).join("");
    //             }
    //         } else if (parseInt(strArr[i+1]) == (parseInt(strArr[i])) - 1) {
    //             if (parseInt(strArr[i+2]) == parseInt(strArr[i+1]) - 1) {
    //                 return strArr.slice(i,i+3).join("");
    //             }//if
    //         }//else if
    //     }//if
    // }//for
    // return false;
}