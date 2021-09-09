// JZ01二维数组中的查找
// 描述
// 在一个二维数组array中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// [
// [1,2,8,9],
// [2,4,9,12],
// [4,7,10,13],
// [6,8,11,15]
// ]
// 给定 target = 7，返回 true。 给定 target = 3，返回 false。
// 0 <= array.length <= 500, 0 <= array[0].length <= 500
// 示例1
// 输入：
// 7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
// 返回值：
// true
// 说明：
// 存在7，返回true 

// 示例2
// 输入：
// 3,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
// 返回值：
// false
// 说明：
// 不存在3，返回false
function Find(target, array) {
    // write code here
    // // 解法1
    // let rowNum = array.length;
    // let columnNum = array[0].length;
    // for (let row = 0, column = columnNum - 1; column >= 0 && row < rowNum;) {
    //     if (target > array[row][column]) {
    //         row++;
    //     } else if (target < array[row][column]) {
    //         column--;
    //     } else {
    //         return true;
    //     }
    // }
    // return false;

    // 解法2
    let flag = array.some((value) => {
        return value.includes(target);
    });
    return flag;
}
module.exports = {
    Find: Find
};
