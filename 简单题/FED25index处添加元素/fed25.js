// FED25index处添加元素

// 描述
// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组

// 示例1
// 输入：
// [1, 2, 3, 4], 'z', 2

// 输出：
// [1, 2, 'z', 3, 4]

function insert(arr, item, index) {
    // 解法1 使用splice
    let newArr = arr.slice(0);
    newArr.splice(index, 0, item);
    return newArr;

    // // 解法2 遍历数组，修改index处值后数组后移
    // if (index < arr.length) {
    //     let newArr = arr.slice(0);
    //     for (let i = newArr.length; i > index; i--) {
    //         newArr[i] = newArr[i - 1];
    //     }
    //     newArr[index] = item;
    //     return newArr;
    // }
    // //如果原数组不包含这样的index，则返回原数组
    // return arr;

    // // 解法3 将数组拆成index之前和之后的左右两部分
    // //       在前一段的后面添加item或者在后一段的前面添加item
    // let left = arr.slice(0, index);
    // let right = arr.slice(index);
    // left.push(item);
    // // right.unshift(item);
    // return left.concat(right);
}