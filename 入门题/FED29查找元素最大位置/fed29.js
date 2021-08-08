// FED29查找元素最大位置

// 描述
// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置

// 示例1
// 输入：
// ['a','b','c','d','e','f','a','b','c'] 'a'

// 输出：
// [0, 6]

function findAllOccurrences(arr, target) {
    // // 解法1 利用reduce方法
    // return arr.reduce((indexArr, curValue, curIndex) => {
    //     if (curValue == target) {
    //         indexArr.push(curIndex);
    //     }
    //     return indexArr;
    // }, []);

    // // 解法2 使用while循环和indexOf方法
    // var indexArr = new Array;
    // var index = arr.indexOf(target);
    // while (index > -1) {
    //     indexArr.push(index);
    //     index = arr.indexOf(target,index+1);
    // }
    // return indexArr;

    // // 解法3 forEach方法遍历数组并记录
    // var indexArr = new Array;
    // arr.forEach((element, index) => {
    //     // if (element == target) {
    //     //     indexArr.push(index);
    //     // }

    //     // 用 || 替换if逻辑
    //     element !== target ||  indexArr.push(index);
    // });
    // return indexArr;

    // // 解法4 for循环遍历数组并记录
    // var indexArr = [];
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] == target) {
    //         indexArr.push(i);
    //     }
    // }
    // return indexArr;

    // 解法5 使用map方法和filter方法
    // return arr.map(function(e, index) {
    //     return e === target ? index : -1;
    //     /* 样例返回结果为[ -1, -1, -1, -1, -1, -1, -1, 0, 6 ] */
    // }).filter(function(i) {
    //     return i !== -1;
    //     /* 过滤掉 i === -1 的情况 */
    // })

    //箭头函数版
    return arr.map((e, index) => e === target ? index : -1).filter(i => i !== -1);
}