// FED21删除数组最后一个元素

// 描述
// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组

// 示例1
// 输入：
// [1, 2, 3, 4]

// 输出：
// [1, 2, 3]

function truncate(arr) {
    // // 解法1 利用concat+pop
    // // cancat 不改变原数组。concat合并数组之后，返回值才是新数组，并且可以合并两个及其以上的数组
    // var newArr = arr.concat();
    // newArr.pop();
    // return newArr;

    // 解法2 利用slice
    return arr.slice(0, -1);

    // // 解法3 利用filter
    // // filter不会对空数组进行检测 不会改变原数组
    // // array.filter(function(currentValue,index,arr), thisValue)
    // return arr.filter((v, i, ar) => i != ar.length - 1);

    // // 解法4 利用push.apply+pop
    // // push.apply合并数组是把后一个数组的值依次push进前一个数组，使前一个数组发生改变，并且只能两个数组之间发生合并。
    // var newArr = [];
    // newArr.push.apply(newArr, arr);
    // newArr.pop();
    // return newArr;

    // // 解法5 利用join+split+pop    注意！！！：数据类型会变成字符型
    // var newArr = arr.join().split(',');
    // newArr.pop();
    // return newArr;

    // // 解法6 普通的迭代拷贝
    // var newArr = [];
    // for (var i = 0; i < arr.length - 1; i++) {
    //     newArr.push(arr[i]);
    // }
    // return newArr;

    // // 解法7 arr复制到newArr后修改newArr的length值为newArr.length-1，则数组缩容
}