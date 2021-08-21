/**
 * 选择排序 降序
 * @author: Waylon(WAY-C)
 * 中心思想: 从头到尾遍历数组，每次从当前元素之后的元素中找到最大元素，与当前元素交换位置
 * @param: arr 待排序数组
 * @return: newArr 排序后数组
 */
function descSelectionSort(arr) {
    let newArr = arr.slice(0);
    let len = newArr.length;
    // let minIndex = 0;
    for (let i = 0; i < len; i++) {
        //从头到尾遍历数组，i为当前元素的下标
        let maxIndex = i;
        for (let j = i + 1; j < len; j++) {
            // j是从当前元素之后的元素开始，寻找最大值
            if (newArr[j] > newArr[maxIndex]) {
                maxIndex = j;
            }
        }
        let temp = newArr[i];
        newArr[i] = newArr[maxIndex];
        newArr[maxIndex] = temp;
    }
    return newArr;
}