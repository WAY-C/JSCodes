// 数组的对称差
// 比较两个数组并返回一个新数组，包含所有只在其中一个数组中出现的元素，排除两个数组都存在的元素。 换言之，我们需要返回两个数组的对称差。

// **注意：**返回数组中的元素顺序不会影响挑战的测试结果。

// 解法1 使用some方法
function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.some((val) => val === arr1[i])) {
            newArr.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.some((val) => val === arr2[i])) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// 解法2 使用indexOf
function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// 解法3 使用concat filter includes
function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter((val) => !arr1.includes(val) || !arr2.includes(val));
}
