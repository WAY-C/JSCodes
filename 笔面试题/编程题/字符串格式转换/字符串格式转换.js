// 1.实现一个函数
// function format(s) {
// // todo
// }
// console.log(format('get-element-by-id'));
// // getElementById
function format(s) {
    const sArr = s.split('-');
    for (i = 1; i < sArr.length; i++) {
        let tempArr = sArr[i].split('');
        tempArr[0] = tempArr[0].toUpperCase();
        sArr[i] = tempArr.join('');
    }
    return sArr.join('');
}
console.log(format('get-element-by-id'));