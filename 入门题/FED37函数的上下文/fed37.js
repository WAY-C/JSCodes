// FED37函数的上下文

// 描述
// 将函数 fn 的执行上下文改为 obj 对象

// 示例1
// 输入：
// function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'}

// 输出：
// Hello, Rebecca!!!

function speak(fn, obj) {
    // 方法1 将函数fn直接挂载到obj上
    obj.fn = fn;
    return obj.fn();

    // // 方法2 使用apply
    // return fn.apply(obj);

    // // 方法3 使用call
    // return fn.apply(obj);

    // // 方法4 使用bind
    // return fn.bind(obj)();

}