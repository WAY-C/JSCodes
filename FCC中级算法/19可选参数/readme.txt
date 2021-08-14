// 可选参数
// 创建一个将两个参数相加的函数。 如果只提供了一个参数，则返回一个需要一个参数并返回总和的函数。

// 比如，addTogether(2, 3) 应该返回 5。 而 addTogether(2) 应该返回一个函数。

// 调用这个返回的函数，为它传入一个值，会返回两个值的总和：

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) 应返回 5。

// 如果任一参数不是有效数字，则返回 undefined。

// addTogether(2, 3) 应返回 5。

// addTogether(23, 30) 应返回 53。

// addTogether(5)(7) 应返回 12。

// addTogether("http://bit.ly/IqT6zt") 应返回 undefined。

// addTogether(2, "3") 应返回 undefined。

// addTogether(2)([3]) 应返回 undefined。
function addTogether() {
    if (typeof(arguments[0]) !== 'number') {
        return undefined;
    }
    if (arguments.length < 2) {
        let first = arguments[0];
        return function(num) {
            if (typeof(num) !== 'number') {
                return undefined;
            } else {
                return first + num;
            }
        }
    } else {
        if (typeof(arguments[1]) !== 'number') {
            return undefined;
        } else {
            return arguments[0] + arguments[1];
        }
    }
}

console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
