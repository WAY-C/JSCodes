// FED33完全等同

// 描述
// 判断 val1 和 val2 是否完全等同

function identity(val1, val2) {
    // 考虑 +0 -0 以及 NaN与任何值都不相等，包括NaN本身。

    // // 方法一： 利用 === 判断，不进行类型转换，判断完全相等
    // return val1 === val2;

    // 方法二： 利用ES6 Object.is()方法进行判断
    // '==='判断的话+0和-0会认为是相等的，NaN会认为是不相等的。
    // 所以碰到这两种情况要进行特殊判断建议使用ES6的Object.is()方法
    return Object.is(val1, val2);
}