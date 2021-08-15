// 回文检查器
// 如果传入的字符串是回文字符串，则返回 true。 否则返回 false

// 回文 palindrome，指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。

// 注意：检查回文时，你需要先去除所有非字母数字的字符（标点、空格和符号），并将所有字母都转换成大写或都转换成小写。

// 我们会传入具有不同格式的字符串，如 racecar、RaceCar 和 race CAR 等等。

// 我们也会传入一些包含特殊符号的字符串，例如 2A3*3a2、2A3 3a2、2_A3*3#A2。
function palindrome(str) {
    let strArr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("");
    for (let i = 0; i < strArr.length; i++) {
        //console.log(strArr[i]+strArr[strArr.length-i-1]);
        if (strArr[i] !== strArr[strArr.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("eye"));