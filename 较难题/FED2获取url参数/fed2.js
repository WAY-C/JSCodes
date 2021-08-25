// FED2获取url参数
// 描述
// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组
// 4. 不支持URLSearchParams方法

// 示例1
// 输入：
// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key

// 输出：
// [1, 2, 3]
function getUrlParam(sUrl, sKey) {
    const regex = /[\?&](\w+)=(\w+)/g;
    let params = {};
    sUrl.replace(regex, (a, k, v) => {
        if (params[k]) {
            let t = params[k];
            params[k] = [].concat(t, v);
        } else {
            params[k] = v;
        }
    });
    if (sKey) {
        return params[sKey] || "";
    } else {
        return params;
    }
}