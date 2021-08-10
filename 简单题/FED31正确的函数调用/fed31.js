// FED31正确的函数调用

// 描述
// 请修复给定的 js 代码中，函数定义存在的问题

// 示例1
// 输入：
// true

// 输出：
// a

// 给定的 js 代码:
// function functions(flag) {
//     if (flag) {
//       function getValue() { return 'a'; }
//     } else {
//       function getValue() { return 'b'; }
//     }

//     return getValue();
// }

function functions(flag) {
    if (flag) {
        var getValue = function() { return 'a'; }
    } else {
        var getValue = function() { return 'b'; }
    }
    return getValue();
}