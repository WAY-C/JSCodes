// 范围内的数字求和
// 我们会传入一个由两个数字组成的数组。 
// 给出一个含有两个数字的数组，我们需要写一个函数，
// 让它返回这两个数字间所有数字（包含这两个数字）的总和。 
// 最低的数字并不总是第一位。

// 例如，sumAll([4,1]) 应返回 10，因为从 1 到 4（包含 1、4）的所有数字的和是 10。

// function sumAll(arr) {
//     return 1;
//   }

//   sumAll([1, 4]);

// 解法1 使用Math.min,Math.max,for循环
function sumAll(arr) {
    let start = Math.min(arr[0], arr[1]);
    let end = Math.max(arr[0], arr[1]);
    let sum = start;
    for (let i = start + 1; i <= end; i++) {
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);

// 解法2 计算两个数间有多少个数，两数相加乘个数再除以二
const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];

    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;

    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
};

// 解法3 使用递归方法

function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    //使用sort让两个数按从小到大排序
    return first !== last //递归到最后一个数时跳出循环
        ?
        first + sumAll([first + 1, last]) :
        first;
}

sumAll([1, 4]);