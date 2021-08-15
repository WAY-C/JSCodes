// 凯撒密码

// 凯撒密码（ Caesar cipher）是最简单且最广为人知的密码（ciphers），

// 也被称为移位密码（shift cipher）。 在移位密码中，

// 明文中的字母通过按照一个固定数目进行偏移后被替换成新的字母。

// ROT13 是一个被广泛使用的加密技术，明文中的所有字母都被移动 13 位。 也就是， A ↔ N，B ↔ O 等等。

// 编写一个函数，它将 ROT13 编码的字符串作为输入并返回解码字符串。

// 所有解码后的字母都必须为字母大写。 请不要解码非字母的字符（例如，空格、标点符号），但你需要在结果中保留它们。

function rot13(str) {
    let letterArr = str.split("");
    //console.log(letterArr.join(""));
    for (let i = 0; i < letterArr.length; i++) {
        if (str.charCodeAt(i) >= 78 && /[A-Z]/.test(letterArr[i])) {
            letterArr.splice(i, 1, String.fromCharCode(str.charCodeAt(i) - 13));
        } else if (str.charCodeAt(i) < 78 && /[A-Z]/.test(letterArr[i])) {
            letterArr.splice(i, 1, String.fromCharCode(str.charCodeAt(i) + 13));
        }
    }
    //console.log(letterArr.join(""));
    return letterArr.join("");
}
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")