// FED26计数

// 描述
// 统计数组 arr 中值等于 item 的元素出现的次数

// 示例1
// 输入：
//     [1, 2, 4, 4, 3, 4, 3], 4

// 输出：
// 3

function count(arr, item) {
    //解法1 利用filter和箭头函数一行解决
    return arr.filter(p => p === item).length;

    // // 解法2 遍历数组并计数
    // var count = 0;
    // for(var i = 0; i < arr.length; i++) {
    //     if (arr[i] == item) {
    //         count++;
    //     }
    // } 

    // 不同的for循环写法
    // for(let i of arr){
    //     if(i === item){
    //     count++;
    //     }
    // }

    // return count;

    // // 解法3 利用forEach方法遍历数组 返回数组长度
    // var count = 0;
    // arr.forEach(element => {
    //     if (element == item) {
    //         count++;
    //     }
    // });
    // return count;

    // // 解法4 删去不同的 返回数组长度
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] != item) {
    //         arr.splice(i,1);
    //         i--;//因为删去了一个元素，所以循环次数减1
    //     }
    // }
    // return arr.length;

    // // 方法5 遍历数组，遇到不同的往前移动，返回数组长度
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] != item) {
    //         for (var j = i; j < arr.length; i++) {
    //             arr[j] = arr[j+1];
    //         }
    //         arr.pop();
    //         i--;
    //     }
    // }
    // return arr.length;

    // 解法6 reduce方法一行解决
    // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    // reduce() 可以作为一个高阶函数，用于函数的 compose。
    // 注意: reduce() 对于空数组是不会执行回调函数的。
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    // total	    必需。初始值, 或者计算结束后的返回值。
    // currentValue	必需。当前元素
    // currentIndex	可选。当前元素的索引
    // arr	        可选。当前元素所属的数组对象。
    // initialValue	可选。传递给函数的初始值

    return arr.reduce((count, cur) => count += Number(cur == item), 0);
}