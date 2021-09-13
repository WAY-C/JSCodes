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
    if (k === str.length) {
        return 0;
    } else {
        for (let i = 0; i < arr.length; i++) {
            // 当栈顶不为空，且当前元素小于栈顶元素，且还有删除次数时
            while (ret.length && arr[i] < ret[ret.length - 1] && k > 0) {
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
        // 找到第一个非零的位置
        let start = 0;
        while (start < ret.length && ret[start] == 0) {
            start++;
        }
        ret = ret.slice(start);
        return parseInt(ret.join(''), 10);
    }
}
function removeKdigits(num, k) {
    let n = num.length;
    if (n <= k) return '0';
    let stack = [];
    for (let i = 0; i < n; i++) {
        while (k && stack.length && num[i] < stack[stack.length - 1]) {
            k--;
            stack.pop();
        }
        if (stack.length || num[i] !== '0') { // 如果是 空栈, '0'就不要加入了
            stack.push(num[i])
        }
    }
    while (k--) stack.pop();
    return stack.join('') || '0'
};

//   作者：shetia
//   链接：https://leetcode-cn.com/problems/remove-k-digits/solution/yi-diao-kwei-shu-zi-by-shetia/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。