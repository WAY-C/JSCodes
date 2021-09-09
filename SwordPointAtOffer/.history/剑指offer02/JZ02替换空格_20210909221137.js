// JZ02替换空格
// 描述
// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
// 示例1
// 输入：
// "We Are Happy"

// 返回值：
// "We%20Are%20Happy"
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
