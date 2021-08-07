// FED17数组求和

// 描述
// 计算给定数组 arr 中所有元素的总和

// 输入描述：
// 数组中的元素均为 Number 类型

// 示例1
// 输入：
// [ 1, 2, 3, 4 ]

// 输出：
// 10

function sum(arr) {
    // 解法1 自己做的 三目运算符
    // let ans = 0;
    // for(var i = 0; i < arr.length; i++) {
    //     ans = i == 0 ? arr[0] : ans+arr[i];
    // }
    // return ans;

    // 解法2 reduce方法和箭头函数
    return arr.reduce((a, b) => a + b, 0);
}