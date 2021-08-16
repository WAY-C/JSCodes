// FED12字符串字符统计

// 描述
// 统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
// 1. 不限制 key 的顺序
// 2. 输入的字符串参数不会为空
// 3. 忽略空白字符

// 示例1
// 输入：
// 'hello world'

// 输出：
// {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}

function count(str) {
    //解法1 自己做的 使用数组存储
    // var list = [];
    // var flag = false;
    // for (var i = 0; i < str.length; i++) {
    //     if (str[i] != " ") {
    //         for (var key in list) {
    //             if (str[i] == key)
    //                 flag = true;
    //         }
    //         if (flag == true) {
    //             list[str[i]]++;
    //         } else {
    //             list[str[i]] = 1;
    //         }
    //         flag = false;
    //     }
    // }
    // return list;

    //解法2 牛客网题解

    //正则表达式去除空格
    str = str.replace(/\s+/g, "")
    arr = str.split('')
    var obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == null) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    return obj;

    //基于解法2，省去数组
    // str = str.replace(/\s+/g, "")
    // var obj = {}
    // for (let i = 0; i < str.length; i++) {
    //     if (obj[str[i]] == null) {
    //         obj[str[i]] = 1;
    //     } else {
    //         obj[str[i]]++;
    //     }
    // }
    // return obj;
}