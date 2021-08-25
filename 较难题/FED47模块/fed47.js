// FED47模块
// 描述
// 完成函数 createModule，调用之后满足如下要求：
// 1、返回一个对象
// 2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
// 3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值

function createModule(str1, str2) {
    // 解法1
    function createModule(str1, str2) {
        let ret = {};
        ret.greeting = str1;
        ret.name = str2;
        ret.sayIt = function() {
            return `${this.greeting}, ${this.name}`;
        };
        return ret;
    }
    // 解法2 使用构造函数
    function Module() {
        this.greeting = str1;
        this.name = str2;
        this.sayIt = function() {
            return `${this.greeting}, ${this.name}`;
        };
    }
    return new Module();
    // 解法3 构造函数与原型结合
    function Module() {
        this.greeting = str1;
        this.name = str2;
    }
    Module.prototype.sayIt = function() {
        return `${this.greeting}, ${this.name}`;
    }
    return new Module();
}