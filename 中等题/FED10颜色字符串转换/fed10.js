// FED10颜色字符串转换

// 描述
// 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
// 1. rgb 中每个 , 后面的空格数量不固定
// 2. 十六进制表达式使用六位小写字母
// 3. 如果输入不符合 rgb 格式，返回原始输入

// 示例1
// 输入：
// 'rgb(255, 255, 255)'

// 输出：
// #ffffff
function rgb2hex(sRGB) {
    let regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    let ret = sRGB.match(regex);
    if (!ret) {
        return sRGB;
    } else {
        let str = "#";
        for (let i = 1; i <= 3; i++) {
            let num = parseInt(ret[i]);
            if (num <= 255 && num >= 0) {
                str += ("0" + num.toString(16)).slice(-2);
            } else {
                return sRGB;
            }
        }
        return str;
    }
}