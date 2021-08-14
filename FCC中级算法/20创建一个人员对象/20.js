// 创建一个人员对象
// 用以下方法填充对象构造函数：
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// 运行测试以查看每个方法的预期输出。 
// 方法接收一个参数，因此必须要有一个参数，并且其类型应该为字符串。 
// 这些方法必须是与对象交互的唯一可用方法。
// Object.keys(bob).length 应返回 6。
// bob instanceof Person 应返回 true。
// bob.firstName 应该返回 undefined。
// bob.lastName 应该返回 undefined。
// bob.getFirstName() 应该返回字符串 Bob.
// bob.getLastName() 应该返回字符串 Ross.
// bob.getFullName() 应该返回字符串 Bob Ross.
// bob.getFullName() 应该在 bob.setFirstName("Haskell") 之后返回字符串 Haskell Ross。
// bob.getFullName() 应该在 bob.setLastName("Curry") 之后返回字符串 Haskell Curry。
// bob.getFullName() 应该返回字符串 Haskell Curry 之后的 bob.setFullName("Haskell Curry")。
// bob.getFirstName() 应该返回字符串 Haskell 之后的 bob.setFullName("Haskell Curry")。
// bob.getLastName() 应该返回字符串 Curry 之后 bob.setFullName("Haskell Curry")。
var Person = function(firstAndLast) {
    // 只修改这一行下面的代码
    // 完成下面的方法，其余的执行类似
    let fullname = firstAndLast;
    this.getFullName = () => fullname;
    this.getFirstName = () => fullname.split(" ")[0];
    this.getLastName = () => fullname.split(" ")[1];
    this.setFirstName = (first) => fullname = first + " " + fullname.split(" ")[1];
    this.setLastName = (last) => fullname = fullname.split(" ")[0] + " " + last;
    this.setFullName = (firstAndLast) => fullname = firstAndLast;
    // // 另一种写法
    // var fullName = firstAndLast;
    // this.getFirstName = function() {
    //     return fullName.split(" ")[0];
    // };
    // this.getLastName = function() {
    //     return fullName.split(" ")[1];
    // };
    // this.getFullName = function() {
    //     return fullName;
    // };
    // this.setFirstName = function(name) {
    //     fullName = name + " " + fullName.split(" ")[1];
    // };
    // this.setLastName = function(name) {
    //     fullName = fullName.split(" ")[0] + " " + name;
    // };
    // this.setFullName = function(name) {
    //     fullName = name;
    // };
};

var bob = new Person('Bob Ross');
bob.getFullName();