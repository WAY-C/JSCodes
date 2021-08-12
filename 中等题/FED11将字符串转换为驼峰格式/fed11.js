// FED11将字符串转换为驼峰格式

// 描述
// css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
// 1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
// 2. -webkit-border-image 转换后的结果为 webkitBorderImage

// 示例1
// 输入：
// 'font-size'

// 输出：
// fontSize

function cssStyle2DomStyle(sName) {
    let wordArr = sName.split("-").filter((val) => val != "");
    // 得到非空单词数组
    for (let i = 1; i < wordArr.length; i++) {
        // 从第二个非空单词起
        let letterArr = wordArr[i].split("");
        // 得到每个单词的字母数组
        letterArr[0] = letterArr[0].toUpperCase();
        // 首字母大写
        wordArr[i] = letterArr.join("");
        // 重组单词
    }
    // 重组字符串并返回
    return wordArr.join("");
}