// FED18移除数组中的元素

// 描述
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

// 示例1
// 输入：
// [1, 2, 3, 4, 2], 2

// 输出：
// [1, 3, 4]

function remove(arr, item) {
    // // 解法1 复制数组，循环删去与item值相等的元素，过于复杂
    // var newArr = arr.slice(0);
    // let len = newArr.length;
    // for (let i = 0; i < len; i++) {
    //     if (JSON.stringify(newArr[i]) === JSON.stringify(item)) {
    //         newArr.splice(i,1);
    //         i--;
    //         len--;
    //     }
    // }
    // return newArr;

    // 解法2 使用filter筛选符合要求的元素，返回给新数组
    var arr2 = arr.filter(value => { return value !== item });
    return arr2;

    // // 解法3 创建一个新数组，使用forEach方法遍历数组arr，
    // //       将值与item的值不等的元素push进新数组，
    // //       遍历完成后返回新数组
    // let newArr = [];
    // arr.forEach(ele => {
    //     if (ele !== item) {
    //         newArr.push(ele);
    //     }
    // });
    // return newArr;

    // // 解法4 可用 map() 方法代替解法3，运行速度更快，内存更小(存疑)
    // // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
    // // map() 方法按照原始数组元素顺序依次处理元素。
    // // 语法： array.map(function(currentValue,index,arr), thisValue)
    // // function(currentValue, index,arr)	必须。函数，数组中的每个元素都会执行这个函数
    // //      currentValue	必须。当前元素的值
    // //      index	可选。当前元素的索引值
    // //      arr	可选。当前元素属于的数组对象
    // // thisValue	可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
    // //      如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。
    // let newArr = [];
    // arr.map(ele => {
    //     if (ele !== item) {
    //         newArr.push(ele);
    //     }
    // });
    // return newArr;

}