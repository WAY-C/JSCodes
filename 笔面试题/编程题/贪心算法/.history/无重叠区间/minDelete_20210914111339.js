// 找到需要移除的最小区间数，使剩余区间互不重叠
// [1,2] [2,3] 互相接触但是不重叠
const arr1 = [[1, 2], [2, 3], [3, 4], [1, 3]];
// 1
const arr2 = [[1, 2], [1, 2], [1, 2]];
// 2
function minDelete(arr) {
    if (!arr.length) {
        return 0;
    }
    arr.sort((a, b) => { a[1] - b[1] });
    const n = arr.length;
    let count = 1;
    let xEnd = arr[0][1];
    for (let i = 1; i < n; i++) {
        if (arr[i][0] >= xEnd) {
            count++;
            xEnd = arr[i][1];
        }
    }
    return n - count;
}
