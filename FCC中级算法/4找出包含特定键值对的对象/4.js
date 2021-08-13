// 找出包含特定键值对的对象
// 创建一个查看对象数组（第一个参数）的函数，
// 并返回具有匹配的名称和值对的所有对象的数组（第二个参数）。 
// 如果要包含在返回的数组中，
// 则源对象的每个名称和值对都必须存在于集合中的对象中。

// 比如，如果第一个参数是 
// [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，
// 第二个参数是 { last: "Capulet" }。

function whatIsInAName(collection, source) {
    var arr = [];
    // 只修改这一行下面的代码
    arr = collection.filter((obj) => {
        for (let key in source) {
            if (obj[key] === source[key]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    })

    // 只修改这一行上面的代码
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });