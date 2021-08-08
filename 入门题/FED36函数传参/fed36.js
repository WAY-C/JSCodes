// FED36函数传参

// 描述
// 将数组 arr 中的元素作为调用函数 fn 的参数

// 示例1
// 输入：
// function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']

// 输出：
// Hello, Ellie!

function argsAsArray(fn, arr) {
    // 解法1 ES6 使用"..."拓展
    return fn(...arr);

    // /*
    // call()、apply()、bind() 都是用来重定义 this 这个对象的！
    // call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：
    // call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string' )。
    // apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,['成都', ..., 'string' ])。
    // bind 除了返回是函数以外，它 的参数和 call 一样。
    // 当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等！ 
    // */

    // // 解法2 使用apply方法
    // return fn.apply(this, arr);

    // // 解法3 使用call方法
    // return fn.call(this, ...arr);

    // // 解法4 使用bind方法
    // return fn.bind(this, ...arr)();
}