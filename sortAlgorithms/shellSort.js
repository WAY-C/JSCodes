/**
 * 希尔排序 降序
 * @author: Waylon (WAY-C)
 * 中心思想：改进插入排序，动态定义间隔序列，将数组分成分割成若干个子序列进行插入排序，增量为1时对整个数组进行插入排序
 * @param: arr 待排序数组
 * @return: newArr 排序后数组
 */
function descShellSort(arr) {
    let newArr = arr.slice(0);
    let gap = newArr.length;
    while (gap > 1) {
        gap = parseInt(gap / 2);
        for (let i = gap; i < newArr.length; i++) {
            let temp = newArr[i];
            let j = i - gap;
            while (newArr[j] < temp && j >= 0) {
                newArr[j + gap] = newArr[j];
                j = j - gap;
            }
            newArr[j + gap] = temp;
        }
    }
    return newArr;
}
// 举个例子， 加强理解：
// var arr = [7, 2, 4, 5, 6, 3, 2, 5, 7, 1];
// 第一次， 增量为5， 则分割为：
// 1-- > [7, 3]
// 2-- > [2, 2]
// 3-- > [4, 5]
// 4-- > [5, 7]
// 5-- > [6, 1]
// 进行排序后结果为：
//     [7, 2, 5, 7, 6, 3, 2, 4, 5, 1]
// 第二次， 增量为2， 则分割为：
// 1-- > [7, 5, 6, 2, 5]
// 2-- > [2, 7, 3, 4, 1]
// 进行排序后结果为：
//     [7, 7, 6, 4, 5, 3, 5, 2, 2, 1]
// 第三次， 增量为1， 进行排序后为：
//     [7, 7, 6, 5, 5, 4, 3, 2, 2, 1]