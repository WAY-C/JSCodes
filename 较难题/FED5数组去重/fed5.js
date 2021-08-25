// FED5数组去重
// 描述
// 为 Array 对象添加一个去除重复项的方法

// 示例1
// 输入：
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]

// 输出：
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
//根据题目要求，需要去重NaN，保留空对象{}
// 用ES6的Set对象可快速解决问题：
Array.prototype.uniq = function() {
        var ret = Array.from(new Set(this));
        return ret;
    }
    // 使用 ...拓展 可以更简洁：
Array.prototype.uniq = function() {
        return [...new Set(this)];
    }
    // 也可以使用includes来解决：
Array.prototype.uniq = function() {
    let ret = [];
    for (let e of this) {
        if (!ret.includes(e)) {
            ret.push(e);
        }
    }
    return ret;
}