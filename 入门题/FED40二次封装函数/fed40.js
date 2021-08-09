// FED40二次封装函数

// 描述
// 已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
// 1、返回一个函数 result，该函数接受一个参数
// 2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致

// 示例1
// 输入：
// var sayIt = function(greeting, name, punctuation) {     return greeting + ', ' + name + (punctuation || '!'); };  partial(sayIt, 'Hello', 'Ellie')('!!!');

// 输出：
// Hello, Ellie!!!

function partial(fn, str1, str2) {
    // 解法1 匿名函数，默认this绑定global，与bind的第一个参数为this时效果一样。
    return function(str3) { /*result(str3)*/
        return fn(str1, str2, str3);
    }

    // 发散思维：
    /*
        // call和apply必须显式地调用str3，立即执行
        // bind不是立即执行，未传入str3时，并未执行，只是返回一个函数，等待参数传入
        // this用于上下文不确定的情况
        
        // 解法2 call
        function result(str3) {
            return fn.call(this, str1, str2, str3);
        }
        return result;

        // 解法3 apply
        function result(str3) {
            return fn.apply(this, [str1, str2, str3]);
        }
        return result;


        // 解法4 bind 
        // 这个bind会生成一个新函数（对象）, 它的str1, str2参数都定死了, str3未传入, 一旦传入就会执行
        return fn.bind(this, str1, str2);
        // 或 return fn.bind(null, str1, str2);

        // bind同上, 多了一步, 把str3传入的过程写在另一个函数里面,
        // 而另一个函数也有str1, str2参数
        // 此法有种多次一举的感觉，但是表示出了后续的调用。
        function result(str3) {
            return fn.bind(this, str1, str2)(str3);
        }
        return result;

        // 解法5 ES6。this指向undefined.
        return str3 => fn(str1, str2, str3);
    */
}