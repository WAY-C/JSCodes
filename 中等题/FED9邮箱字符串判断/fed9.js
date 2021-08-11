// FED9邮箱字符串判断

// 描述
// 判断输入是否是正确的邮箱格式

// 输入描述：
// 邮箱字符串
// 输出描述：
// true表示格式正确

// 1.不限制长度

// 2.不限制大小写

// 3.邮箱开头必须是数字或字符串

// 4.邮箱中可以使用字母、数字、点号、下划线、减号，但是不能连写点号、下划线、减号，如 abc_-de@q_.q.com

// 5.@符号前后不能为点号、下划线、减号

function isAvailableEmail(sEmail) {
    var pattern = /^[\da-z]+[\w\.-]?[\da-z]+@[a-z\d]+[\w\.-]?[a-z\d]+\.[a-z\d]{2,}$/i;
    return pattern.test(sEmail);
}