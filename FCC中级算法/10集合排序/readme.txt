// 集合排序
// 编写一个带有两个或更多数组的函数，并按原始提供的数组的顺序返回一个新的唯一值数组。

// 换句话说，所有数组中出现的所有值都应按其原始顺序包括在内，但最终数组中不得重复。

// 去重后的数字应按其出现在参数中的原始顺序排序，最终数组不应按数字大小进行排序。

// 如有疑问，请先浏览下方的测试用例。

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) 应返回 [1, 3, 2, 5, 4]。

// uniteUnique([1, 2, 3], [5, 2, 1]) 应返回 [1, 2, 3, 5]。

// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) 应返回 [1, 2, 3, 5, 4, 6, 7, 8]。

function uniteUnique(arr) {
    let arrs = Object.values(arguments).slice(1);
    for (let array of arrs) {
        for (let i = 0; i < array.length; i++) {
            if (arr.every((val) => val !== array[i])) {
                // 此处也可使用indexOf判断，如下：
                // if (arr.indexOf(array[i]) < 0) {
                arr.push(array[i]);
            }
        }
    }
    console.log(arr);
    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
