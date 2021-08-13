// 儿童黑话
// 儿童黑话也叫 Pig Latin，是一种英语语言游戏。 规则如下：

// - 如果单词以辅音开头，就把第一个辅音字母或第一组辅音簇移到单词的结尾，并在后面加上 ay。

// - 如果单词以元音开头，只需要在结尾加上 way。

// 请把传入的字符串根据上述规则翻译成儿童黑话并返回结果。 输入的字符串一定是一个小写的英文单词。

function translatePigLatin(str) {
    let regex = /^[^aeiou]+/;
    let temp = str.match(regex);
    // 匹配开头的辅音字母或第一组辅音簇
    // console.log(temp);
    if (temp != null) {
        // 如果是辅音或辅音簇开头
        str = str.replace(temp[0], "") + temp[0] + "ay";
        // 将其移至最后并加上“ay”  
    } else {
        // 如果是元音字母开头
        str += "way";
        // 直接在末尾加“way”
    }
    // console.log(str);
    return str;
}

translatePigLatin("consonant");
