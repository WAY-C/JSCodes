// 寻找缺失的字母
// 在这道题目中，我们需要写一个函数，找出传入的字符串里缺失的字母并返回它。

// 如果所有字母都在传入的字符串范围内，返回 undefined。

// fearNotLetter("abce") 应该返回字符串 d。

// fearNotLetter("abcdefghjklmno") 应返回 i。

// fearNotLetter("stvwx") 应该返回字符串 u。

// fearNotLetter("bcdf") 应该返回字符串 e。

// fearNotLetter("abcdefghijklmnopqrstuvwxyz") 应返回 undefined。

function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        // 从头到尾遍历字符串，除去最后一个字母
        if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) {
            // 若有不连续的字母（unicode值不连续）
            //console.log(String.fromCharCode(str.charCodeAt(i)+1));
            return String.fromCharCode(str.charCodeAt(i) + 1);
            // 返回 unicode值加1 转换出的字符串
        }
    }
}
