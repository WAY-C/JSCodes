// FED52改变上下文

// 描述
// 将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值

// 示例1
// 输入：
// alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' })

// 输出：
// Yo, Rebecca!

function alterContext(fn, obj) {
    // 主要考察重定向this 可使用call apply bind
    return fn.call(obj);
    // return fn.apply(obj);
    // return fn.bind(obj)();

    // // 也可尝试给obj创建方法fn
    // obj.fn = fn;
    // return obj.fn();
}