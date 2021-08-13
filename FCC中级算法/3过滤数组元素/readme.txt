// 过滤数组元素
// 你将获得一个初始数组（ destroyer 函数中的第一个参数）， 后跟一个或多个参数。 从初始数组中移除所有与后续参数相等的元素。

// 注意： 你可以使用 arguments 对象。

// 解法1 使用filter
function destroyer(arr) {
    let args = Object.values(arguments).slice(1);
    return arr.filter((val) => !args.includes(val));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 解法2用两个for循环遍历arr和后续参数组成的数组，删除相等元素
function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < valsToRemove.length; j++) {
            if (arr[i] === valsToRemove[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(item => item !== null);
}
