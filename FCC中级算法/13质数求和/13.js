// 质数求和
// 质数（prime number）是大于 1 且仅可以被 1 和自己整除的数。 
// 比如，2 就是一个质数，因为它只可以被 1 和 2（它本身）整除。 
// 相反，4 不是质数，因为它可以被 1, 2 和 4 整除。

// 请完成 sumPrimes 方法，使其返回小于等于传入参数数字的所有质数之和。

function sumPrimes(num) {
    let numb = parseInt(num, 10);
    let count = 2;
    let sum = 0;
    while (count <= numb) {
        let flag = 1;
        for (let i = 2; i < count; i++) {
            if (count % i == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            sum += count;
        }
        count++;
    }
    return sum;
}