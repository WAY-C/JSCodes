// 电话号码检查器
// 如果传入的字符串是一个有效的美国电话号码格式，则返回 true。

// 只要是有效的美国电话号码的格式，用户可以按照他们的方式填写表单中的电话号码。 
// 以下是一些正确的例子（其他格式变形请参考以下例子）：

// 555-555-5555
// (555)555-5555
// （555）555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// 在这个挑战中，参数可能是 800-692-7753 或者 8oo-six427676;laskdjf 的号码。 
// 你的任务是根据上面不同的格式组合，判断它是否为有效的电话号码。 
// 其中，地区码（电话号码中的前三位）是必须的。 
// 如果提供国家代码，则国家代码只能为 1。 
// 如果传入的参数是有效的美国电话号码就返回 true，否则返回 false。

// 正则表达式解决
function telephoneCheck(str) {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    if (regex.test(str)) {
        return true;
    }
    return false;
}

telephoneCheck("555-555-5555");