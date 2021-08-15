// 罗马数字转换器
// 把传入的数字转为罗马数字。

// 转换后的罗马数字字母必须都是大写。

// 解法1 按位计算，用swtich匹配
function convertToRoman(num) {
    let romanNum = [];
    let thousand = Math.floor(num / 1000);
    let hundred = Math.floor((num % 1000) / 100);
    let ten = Math.floor((num % 100) / 10);
    let individual = Math.floor((num % 10));
    while (thousand--) {
        romanNum.push("M");
    }
    switch (hundred) {
        case 1:
            romanNum.push("C");
            break;
        case 2:
            romanNum.push("CC");
            break;
        case 3:
            romanNum.push("CCC");
            break;
        case 4:
            romanNum.push("CD");
            break;
        case 5:
            romanNum.push("D");
            break;
        case 6:
            romanNum.push("DC");
            break;
        case 7:
            romanNum.push("DCC");
            break;
        case 8:
            romanNum.push("DCCC");
            break;
        case 9:
            romanNum.push("CM");
            break;
    }
    switch (ten) {
        case 1:
            romanNum.push("X");
            break;
        case 2:
            romanNum.push("XX");
            break;
        case 3:
            romanNum.push("XXX");
            break;
        case 4:
            romanNum.push("XL");
            break;
        case 5:
            romanNum.push("L");
            break;
        case 6:
            romanNum.push("LX");
            break;
        case 7:
            romanNum.push("LXX");
            break;
        case 8:
            romanNum.push("LXXX");
            break;
        case 9:
            romanNum.push("XC");
            break;
    }
    switch (individual) {
        case 1:
            romanNum.push("I");
            break;
        case 2:
            romanNum.push("II");
            break;
        case 3:
            romanNum.push("III");
            break;
        case 4:
            romanNum.push("IV");
            break;
        case 5:
            romanNum.push("V");
            break;
        case 6:
            romanNum.push("VI");
            break;
        case 7:
            romanNum.push("VII");
            break;
        case 8:
            romanNum.push("VIII");
            break;
        case 9:
            romanNum.push("IX");
            break;
    }
    return romanNum.join("");
}
console.log(convertToRoman(36));

// 解法2