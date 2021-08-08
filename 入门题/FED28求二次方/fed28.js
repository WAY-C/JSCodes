// FED28求二次方

// 描述
// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组

// 示例1
// 输入：
// [1, 2, 3, 4]

// 输出：
// [1, 4, 9, 16]
function square(arr) {
    // 解法1 遍历并计算
    var newArr = [];
    for (let i of arr) {
        newArr.push(i * i);
    }
    return newArr;

    // 解法2 使用map方法
    // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
    // map() 方法按照原始数组元素顺序依次处理元素。
    // 注意： map() 不会对空数组进行检测。
    // 注意： map() 不会改变原始数组。
    // array.map(function(currentValue,index,arr), thisValue)
    // currentValue	必须。当前元素的值
    // index	    可选。当前元素的索引值
    // arr	        可选。当前元素属于的数组对象
    // thisValue	可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
    //              如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。
    return arr.map(ele => Math.pow(ele, 2));
    // return arr.map(p => p*=p);
    // return arr.map(p => p*p);

    // // 解法3 使用reduce方法
    // return arr.reduce((r, o) => { 
    //     r.push(o * o); return r; 
    // }, []) ;
}