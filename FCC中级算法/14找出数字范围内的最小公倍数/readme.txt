// 找出数字范围内的最小公倍数
// 找到给定参数的最小公倍数，可以被这两个参数整除，也可以被指定范围内的所以整数整除。

// 注意，较小数不一定总是出现在数组的第一个元素。

// 例如，如果给定 1 和 3，找到 1 和 3 的最小公倍数，也可以被 1 到 3 之间的所有数字整除。 
// 这里的答案将是 6

function smallestCommons(arr) {
    let start = Math.min(arr[0], arr[1]);
    let end = Math.max(arr[0], arr[1]);
    let common = end;
    let flag = true;
    while (flag) {
        for (let i = start; i <= end; i++) {
            if (common % i !== 0) {
                common += end;
                break;
            }
            if (i == end && common % i == 0) {
                flag = false;
            }
        }
    }
    return common
}
