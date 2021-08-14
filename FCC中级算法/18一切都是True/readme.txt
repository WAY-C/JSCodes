// 一切都是True
// 检查谓词（第二个参数）在集合（第一个参数）的所有元素是否为 truthy。

// 换句话说，你将获得一个对象的数组集合。 
// 如果数组中的每个对象里，pre 对应属性值均为 truthy，则返回 true。 
// 否则，返回 false 。

// JavaScript 中，如果一个值在 Boolean 的上下文中的
// 执行结果为 true，那么我们称这个值是 truthy 的。

// 别忘了，你可以使用点号表示法或方括号表示法（[]）来访问对象的属性。
function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        if (Boolean(collection[i][pre])) {} else {
            return false;
        }
    }
    return true;
}
