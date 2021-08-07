// FED23 删除数组第一个元素

// 描述
// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组

// 示例1
// 输入：
// [1, 2, 3, 4]

// 输出：
// [2, 3, 4]

function curtail(arr) {
    // // 解法1 先复制 再删除
    // var newArr = arr.slice(0);
    // newArr.shift();
    // //newArr.splice(0,1);
    // return newArr;

    // 解法2 利用slice直接返回删去第一个元素的数组
    return arr.slice(1);

    // // 解法3 利用filter
    // var newArr = arr.filter((v, i, ar) => i != 0);
    // return newArr;
}