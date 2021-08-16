// FED27查找重复元素
// 描述
// 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
// 示例1
// 输入：
// [1, 2, 4, 4, 3, 3, 1, 5, 3]

// 输出：
// [1, 3, 4]
function duplicates(arr) {
    // 解法1
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.slice(i + 1).some((val) => val == arr[i])) {
            if (newArr.every((val) => val != arr[i])) {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;

    // 解法2
    let ret = [];
    for (let i of arr) {
        if (arr.indexOf(i) !== arr.lastIndexOf(i) && ret.indexOf(i) == -1) {
            ret.push(i);
        }
    }
    return ret;
}