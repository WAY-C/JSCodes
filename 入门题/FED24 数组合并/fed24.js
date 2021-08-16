// FED24 数组合并

// 描述
// 合并数组 arr1 和数组 arr2。 不要直接修改数组 arr， 结果返回新的数组

// 示例1
// 输入：
//     [1, 2, 3, 4], ['a', 'b', 'c', 1]

// 输出：
//     [1, 2, 3, 4, 'a', 'b', 'c', 1]

function concat(arr1, arr2) {
    // // 解法1 concat直接合并
    // return arr1.concat(arr2);

    // // 解法2 push.apply合并
    // var arr3 = arr1.slice(0);
    // [].push.apply(arr3,arr2);
    // return arr3;

    // // 解法3 slice+push
    // var newArr=arr1.slice(0);
    // for(var i=0;i<arr2.length;i++){
    //     newArr.push(arr2[i]);
    // }
    // return newArr;

    // // 解法4 普通的迭代拷贝
    // var newArr=[];
    // for(var i=0;i<arr1.length;i++){
    //     newArr.push(arr1[i]);
    // }
    // for(var j=0;j<arr2.length;j++){
    //     newArr.push(arr2[j]);
    // }
    // return newArr;

    // 解法5 拓展运算符...
    return [...arr1, ...arr2];
}