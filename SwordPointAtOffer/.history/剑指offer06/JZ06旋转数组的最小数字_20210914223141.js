// 描述
// 有一个长度为N的升序数组，比如[1,2,3,4,5]，将它进行旋转，
// 即把一个数组最开始的若干个元素搬到数组的末尾，变成一个旋转数组，
// 比如变成了[3,4,5,1,2]，或者[4,5,1,2,3]这样的。
// 请问，给定这样一个旋转数组，求它的最小值。
// 提示:
// 1 <= N<= 10000
// 0 <= rotateArray[i] <= 10000
// 你可以使用O(logN)的时间复杂度通过该题吗?
// 示例1
// 输入：
// [3,4,5,1,2]
// 返回值：
// 1

// 示例2
// 输入：
// [3,100,200,3]
// 复制
// 返回值：
// 3

// 你可以使用O(logN)的时间复杂度通过该题吗?
function minNumberInRotateArray(rotateArray) {
    // write code here
    //     return Math.min(...rotateArray);
    let left = 0;
    let right = rotateArray.length - 1;
    if (rotateArray[left] < rotateArray[right]) {
        return rotateArray[left];
    }
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (rotateArray[mid] > rotateArray[mid + 1]) {
            return rotateArray[mid + 1];
        } else if (rotateArray[mid] < rotateArray[mid - 1]) {
            return rotateArray[mid];
        } else if (rotateArray[mid] < rotateArray[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return 0;
}
module.exports = {
    minNumberInRotateArray: minNumberInRotateArray
};