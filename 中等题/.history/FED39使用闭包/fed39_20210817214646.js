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

function makeClosures(arr, fn) {
    var result = [];
    let args = arr.slice(0);
    for (let i = 0; i < arr.length; i++) {
        result.push(fn.bind(this, args[i]));
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