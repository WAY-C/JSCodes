// FED54属性遍历

// 描述
// 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
// 1、返回数组，格式为 key: value
// 2、结果数组不要求顺序

// 示例1
// 输入：
// var C = function() {this.foo = 'bar'; this.baz = 'bim';}; 
// C.prototype.bop = 'bip'; 
// iterate(new C());

// 输出：
// ["foo: bar", "baz: bim"]

function iterate(obj) {
    // 方法1 遍历obj的属性，用hasOwnProperty属性判断是否仅自己的实例属性
    let ret = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            ret.push(key + ": " + obj[key]);
        }
    }
    return ret;

    // 方法2 用Object.keys方法，仅遍历自己的实例属性
    /*
     ** Object.keys() 方法
     ** 会返回一个由一个给定对象的自身可枚举属性组成的数组，
     ** 数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。
     ** 
     ** 语法：    Object.keys(obj)
     ** 
     ** 参数：    obj 要返回其枚举自身属性的对象
     **
     ** 返回值：  一个表示给定对象的所有可枚举属性的字符串数组
     */
    // let properties = Object.keys(obj);
    // let ret = [];
    // for (let key in properties) {
    //     ret.push(properties[key] + ": " + obj[properties[key]]);
    // }
    // return ret;
}