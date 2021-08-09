// FED51乘法

// 描述
// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题

// 示例1
// 输入：
// 3, 0.0001

// 输出：
// 0.0003

function multiply(a, b) {
    // 方法1 先转换成字符串，找到小数点后最长位，将计算结果保留该位数
    // 转换成字符串
    let [aStr, bStr] = [a.toString(), b.toString()];
    // // 得到小数点后最长位数
    // let lenA = aStr.indexOf('.') === -1 ? 0 : aStr.length - 1 - aStr.indexOf('.');
    // let lenB = bStr.indexOf('.') === -1 ? 0 : bStr.length - 1 - bStr.indexOf('.');
    // let len = Math.max(lenA, lenB);
    // // 计算
    // return (a * b).toFixed(len);

    // // 方法2 转换成整型计算，再除掉转整型时乘的位数
    // let lenA = a.toString().indexOf('.') === -1 ? 0 : a.toString().length - 1 - a.toString().indexOf('.');
    // let lenB = b.toString().indexOf('.') === -1 ? 0 : b.toString().length - 1 - b.toString().indexOf('.');
    // // 上述两步可用String() 方法代替toString()
    // f1 = Math.pow(10, lenA);
    // f2 = Math.pow(10, lenB);
    // a *= f1;
    // b *= f2;
    // return a * b / f1 / f2;

    // // 转换成整型计算 使用split
    // let s1 = a.toString(),
    //     s2 = b.toString(),
    //     m = 0;
    // if (s1.includes('.')) {
    //     m += s1.split('.')[1].length;
    // }
    // if (s2.includes('.')) {
    //     m += s2.split('.')[1].length;
    // }
    // return s1.replace('.', '') * s2.replace('.', '') / Math.pow(10, m);
}