/**
 * 插入排序 降序
 * @author: Waylon (WAY-C)
 * 中心思想：遍历数组，默认第一个元素开始已是有序数组，将之后的元素插入相应的位置
 * @param: arr 待排序数组
 * @return: newArr 排序后数组
 */
// 方法一 常规做法
function descInsertionSort1(arr) {
    let newArr = arr.slice(0);
    for (let i = 1; i < newArr.length; i++) {
        let j = i - 1;
        let cur = i;
        while (j >= 0) {
            if (newArr[cur] > newArr[j]) {
                let temp = newArr[cur];
                newArr[cur] = newArr[j];
                newArr[j] = temp;
            }
            cur--;
            j--;
        }
    }
    return newArr;
}
// 方法2 常规解法
function descInsertionSort2(arr) {
    let newArr = arr.slice(0);
    for (let i = 1; i < newArr.length; i++) {
        let j = i - 1;
        let temp = newArr[i];
        while (newArr[j] < temp && j >= 0) {
            newArr[j + 1] = newArr[j--];
        }
        newArr[j + 1] = temp;
    }
    return newArr;
}
// 方法3 二分查找
function descInsertionSort3(arr) {
    for (var i = 1; i < arr.length; i++) {
        var left = 0,
            var right = i - 1;
        var temp = arr[i];
        while (left <= right) {
            var middle = parseInt((left + right) / 2);
            if (temp < arr[middle]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        for (var j = i; j > left; j--) {
            arr[j] = arr[j - 1];
        }
        arr[left] = temp;
    }
    return arr;
}