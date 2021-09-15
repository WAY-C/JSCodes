// 描述
// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
// 保证base和exponent不同时为0。不得使用库函数，同时不需要考虑大数问题，也不用考虑小数点后面0的位数。
// 示例1
// 输入：
// 2.00000,3
// 复制
// 返回值：
// 8.00000
// 复制
// 示例2
// 输入：
// 2.10000,3
// 复制
// 返回值：
// 9.26100
// 复制
// 示例3
// 输入：
// 2.00000,-2
// 复制
// 返回值：
// 0.25000
// 复制
// 说明：
// 2的-2次方等于1/4=0.25
function Power(base, exponent) {
    // write code here
    let res = 1;
    let iteration = exponent > 0 ? exponent : -exponent;
    if (exponent > 0) {
        while (iteration--) {
            res *= base;
        }
        return res;
    } else if (exponent < 0) {
        if (base == 0) {
            return NaN;
        }
        while (iteration--) {
            res *= base;
        }
        return 1 / res;
    } else {
        return 1;
    }
}
module.exports = {
    Power: Power
};