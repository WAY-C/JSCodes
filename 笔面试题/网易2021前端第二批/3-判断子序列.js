// 给定两个字符串 s和 t ，判断 s是否为 t 的子序列。

// 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），
// 而 s 是个短字符串（长度 <=100）。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置
// 形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

let s = readline();
let t = readline();
let i = 0;
for (let j = 0; j < t.length; j++) {
    if (s[i] == t[j]) {
        i++;
        if (i >= s.length) {
            break;
        }
    }
}
if (i >= s.length) {
    console.log(true);
} else {
    console.log(false);
}

let s = readline();
let t = readline();

function a(s, t) {
    let count = 0;
    var i = 0;
    for (var j = 0; j < t.length; j++) {
        if (s[i] === t[j]) {
            count++;
            i++;
        }
    }
    return count >= s.length;
}
print(a(s, t));