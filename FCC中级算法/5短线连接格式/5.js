// 短线连接格式
// 将字符串转换为短线连接格式。 
// 短线连接格式是小写单词全部小写并以破折号分隔。
// spinalCase("This Is Spinal Tap") 应返回 this-is-spinal-tap。

// spinalCase("thisIsSpinalTap") 应返回 this-is-spinal-tap。

// spinalCase("The_Andy_Griffith_Show") 应返回 the-andy-griffith-show。

// spinalCase("Teletubbies say Eh-oh") 应返回 teletubbies-say-eh-oh。

// spinalCase("AllThe-small Things") 应返回 all-the-small-things。

// 解法1 使用正则表达式匹配单词 match所有单词后用-连接并小写
function spinalCase(str) {
    let regex = /[A-Z]*[a-z]*[a-z]/g;
    let strArr = str.match(regex);
    return strArr.join("-").toLowerCase();
}

// 解法2 给单词之间加上空格，用“-”替换空格和下划线
function spinalCase(str) {
    let regex = /\s|_/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(regex, "-").toLowerCase();
}