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
    // 解法1 暴力法
    // return Math.min(...rotateArray);

    // 解法2 二分法

    let n = rotateArray.length - 1;
    if (n < 0) {
        return 0;
    }
    //  二分查找，
    // 要达到二分性质，需要使前半段 nums[i] >= nums[0] 后半段 nums[i]<nums[0]
    // 去除第二段末尾与nums[0]相等的元素
    while (rotateArray[n] == rotateArray[0] && n > 0) {
        n--;
    }
    if (rotateArray[n] >= rotateArray[0]) {
        return rotateArray[0];
    }
    // 开始二分
    let left = 0;
    let right = n;
    while (left < right) {
        let mid = left + right >> 1;
        if (rotateArray[mid] < rotateArray[0]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return rotateArray[right];
}
module.exports = {
    minNumberInRotateArray: minNumberInRotateArray
};