// 数组扁平化
// 嵌套数组扁平化成一维数组。 必须考虑到各种深度的嵌套层级

// 解法1
function steamrollArray(arr) {
    let newArr = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            newArr.push(...steamrollArray(item));
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}
// 解法2
function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
