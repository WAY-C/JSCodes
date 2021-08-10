// FED20添加元素
// 描述
// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

// 示例1
// 输入：
// [1, 2, 3, 4],  10

// 输出：
// [1, 2, 3, 4, 10]
function append(arr, item) {
    // 解法1 使用数组的concat方法
    return arr.concat(item);

    // 解法2 使用push
    let newArr = arr.slice(0);
    newArr.push(item);
    return newArr;

    // 解法3 使用赋值的方法使数组扩容
    let newArr = arr.slice(0);
    newArr[arr.length] = item;
    return newArr;

    // 解法4 使用“...”拓展，直接返回新数组
    return [...arr, item];

    // 解法3 仅思维发散，此处可加一个原型继承中是否存在该方法的判断，如下
    if (Array.prototype.concat) {
        return arr.concat(item);
    } else { // 若不支持则使用for循环遍历数组来解决
        let newArr = arr.slice(0);
        newArr.push(item);
        return newArr;
        // 同理，可看是否支持push方法
        /*
        if (Array.prototype.push) {
            let newArr = arr.slice(0);
            newArr.push(item);
            return newArr;
        } else {
            let newArr = arr.slice(0);
            // 也可判断原型继承中是否存在slice方法
            // 若不存在，可用for循环完成数组复制
            newArr[arr.length] = item;
            return newArr;
        }
        */
    }
}