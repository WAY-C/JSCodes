// 给定一个数字组成的字符串
// 给定要删数字的个数
// 求删去后组成的最小数字
// 如：10200 1 ----> 200
//     1423 1 ----> 123
//     123 3 ----> 0

// 核心思路：只需从左往右依次入栈，如果下一位比当前位小，则当前位出栈
// 用数组来模拟栈
function findMin(str, k) {
    let arr = str.split('').map(Number);
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        // 当栈顶不为空，且当前元素小于栈顶元素，且还有删除次数时
        if (ret.length && arr[i] < ret[ret.length - 1] && k > 0) {
            // 栈顶元素出栈
            ret.pop();
            // 删除次数减1
            k--;
            // 当前元素入栈
            ret.push(arr[i]);
        }
        // 第一个元素入栈及后续剩余元素入栈
        ret.push(arr[i]);
    }

}