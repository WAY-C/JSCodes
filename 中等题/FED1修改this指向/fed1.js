// FED1修改this指向

// 描述
// 封装函数 f，使 f 的 this 指向指定的对象

// 给定JS代码：
// function bindThis(f, oTarget) {

// }

function bindThis(f, oTarget) {
    return f.bind(oTarget);
    //也可构建函数使用apply等，不再赘述
}