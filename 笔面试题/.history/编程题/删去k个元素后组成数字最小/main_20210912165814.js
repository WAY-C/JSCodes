// 给定一个数字组成的字符串
// 给定要删数字的个数
// 求删去后组成的最小数字
// 如：10200 1 ----> 200
//     1423 1 ----> 123
//     123 3 ----> 0

// 核心思路：只需从左往右依次入栈，如果下一位比当前位小，则当前位出栈
function findMin(str, k) {
    let ret = [];
    if (k === str.length) {
        return 0;
    } else {
        for (let i = 0; i < str.length; i++) {
            if (k--) {
                if (str[i + 1] < str[i]) {
                    i++;
                }
            }
            // 若首位已存在
            if (ret[0]) {
                ret.push(str[i]);
            } else {
                // 若首位不存在，跳过0
                if (str[i] == '0') {
                    i++;
                }
                ret.push(str[i]);
            }
        }
        return parseInt(ret.join(''));
    }
}