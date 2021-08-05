// 正则表达式 
function endsWithVowel(str) {
    var reg = /[a,e,i,o,u]$/i;
    return str && reg.test(str);
}
