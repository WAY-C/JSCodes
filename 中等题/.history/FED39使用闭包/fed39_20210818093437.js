// FED39使用闭包
// 描述
// 实现函数 makeClosures，调用之后满足如下条件：
// 1、返回一个函数数组 result，长度与 arr 相同
// 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同

// 示例1
// 输入：
// [1, 2, 3], function (x) { 
// 	return x * x; 
// }

// 输出：
// 4
// ES6的let
// let声明的变量只在let所在代码块内有效，因此每次循环的i都是一个新的变量
function makeClosures(arr, fn) {
    var result = new Array();
    for (let i = 0; i < arr.length; i++) {
        result[i] = function() {
            return fn(arr[i]);
        };
    }
    return result;
}
// 参考《JavaScript高级程序设计》的典型方法 
function makeClosures(arr, fn) {
    var result = new Array();
    for (var i = 0; i < arr.length; i++) {
        result[i] = function(num) {
            return function() {
                return fn(num);
            }
        }(arr[i]);
    }
    return result;
}
// ES5的bind方法
function makeClosures(arr, fn) {
    var result = new Array();
    for (var i = 0; i < arr.length; i++) {
        result[i] = fn.bind(null, arr[i]);
    }
    return result;
}