// 描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
// 示例1
// 输入：
// [1,2,3,4]
// 复制
// 返回值：
// [1,3,2,4]
// 复制
// 示例2
// 输入：
// [2,4,6,5,7]
// 复制
// 返回值：
// [5,7,2,4,6]
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
function reOrderArray(array) {
    // write code here
    let oddArr = [];
    let evenArr = [];
    array.forEach((ele) => {
        if (ele % 2 !== 0) {
            oddArr.push(ele);
        } else {
            evenArr.push(ele);
        }
    });
    return oddArr.concat(evenArr);
}
module.exports = {
    reOrderArray: reOrderArray
};