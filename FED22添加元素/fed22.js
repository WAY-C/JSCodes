// FED22添加元素

// 描述
// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

// 示例1
// 输入：
// [1, 2, 3, 4], 10

// 输出：
// [10, 1, 2, 3, 4]

function prepend(arr, item) {
    // 解法1 利用concat和unshift
    var newArr = arr.concat();
    newArr.unshift(item);
    return newArr;

    // // 解法2 利用slice和unshift或splice
    // var newArr = arr.slice(0);
    // newArr.unshift(item); //newArr.splice(0,0,item);
    // return newArr;

    // // 解法3 利用push.apply合并数组
    // var newArr = [item];
    // newArr.push.apply(newArr, arr);
    // return newArr;

    // // 解法4 利用concat拼接数组
    // var newArr = [item];
    // newArr = newArr.concat(arr);
    // return newArr;
    // // 解法4的另一种写法
    // var newArr = [];
    // newArr = newArr.concat(item, arr);
    // return newArr;
    // // 另一种写法 省略一个变量
    // return [item].concat(arr);

    // // 解法5 普通的迭代拷贝
    // var newArr = [item];
    // for (var i = 0; i < arr.length; i++) {
    //     newArr.push(arr[i]);
    // }
    // return newArr;
}