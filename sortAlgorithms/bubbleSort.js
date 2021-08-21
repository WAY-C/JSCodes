/**
 * 冒泡排序 降序
 * @author: Waylon(WAY-C)
 * 中心思想：重复遍历需要排序的数组，每次比较两个元素，若顺序错误则交换位置
 * @param: arr 待排序数组
 * @return: 排序后的数组
 */
// 方法1 常规实现
function descBubbleSort1(arr) {
    let newArr = [].concat(arr);
    // let newArr = arr.slice(0);
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length - 1; j++) {
            if (newArr[j] < newArr[j + 1]) {
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }
    return newArr;
}
// 方法2 记录最后一个换位的位置，之后的已经拍好序了，无需再遍历
function descBubbleSort2(arr) {
    let newArr = [].concat(arr);
    let i = newArr.length - 1;
    let pos = 0;
    while (i > 0) {
        pos = 0;
        for (let j = 0; j < i; j++) {
            if (newArr[j] < newArr[j + 1]) {
                pos = j;
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
        i = pos;
    }
    return newArr;
}
// 方法3 每趟排序中都进行一次正向排序和一次反向排序
function descBubbleSort3(arr) {
    let newArr = [].concat(arr);
    let head = 0;
    let tail = newArr.length - 1;
    while (head < tail) {
        for (let i = head; i < tail; i++) {
            if (newArr[i] < newArr[i + 1]) {
                let temp = newArr[i];
                newArr[i] = newArr[i + 1];
                newArr[i + 1] = temp;
            }
        }
        head++;
        for (let j = tail; j > head; j--) {
            if (newArr[j] > newArr[j - 1]) {
                let temp = newArr[j];
                newArr[j] = newArr[j - 1];
                newArr[j - 1] = temp;
            }
        }
        tail--;
    }
    return newArr;
}
// 方法4 结合方法2与方法3，在正向和反向排序的过程中记录下最后换位的位置
function bubbleSort4(arr) {
    let newArr = arr.slice(0);
    let headPos = 0;
    let tailPos = newArr.length - 1;
    while (headPos < tailPos) {
        let temptail = undefined;
        let temphead = undefined;
        for (let i = headPos; i < tailPos; i++) {
            if (newArr[i] < newArr[i + 1]) {
                temptail = i;
                let temp = newArr[i];
                newArr[i] = newArr[i + 1];
                newArr[i + 1] = temp;
            }
        }
        tailPos = temptail;
        for (let j = tailPos; j > headPos; j--) {
            if (newArr[j] > newArr[j - 1]) {
                temphead = j;
                let temp = newArr[j];
                newArr[j] = newArr[j - 1];
                newArr[j - 1] = temp;
            }
        }
        headPos = temphead;
    }
    return newArr;
}