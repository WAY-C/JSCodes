// FED16查找数组元素位置

// 描述
// 找出元素 item 在给定数组 arr 中的位置
// 输出描述：
// 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

// 示例1
// 输入：
// [ 1, 2, 3, 4 ], 3

// 输出：
// 2

function indexOf(arr, item) {
    // // 解法1 使用数组的indexOf方法
    // return arr.indexOf(item);
    // // 解法2 此处可加一个原型继承中是否存在该方法的判断，如下
    // if (Array.prototype.indexOf){
    //     return arr.indexOf(item);
    // } else { // 若不支持则使用for循环遍历数组来解决
    //     for (var i = 0; i < arr.length; i++){
    //         if (arr[i] === item){
    //             return i;
    //         }
    //     }
    // }     
    // return -1;

    /*发散思维*/
    // 依题意，没有明确指出元素item的类型，也没有明确给出是否返回所有位置的值
    // 解法3 
    if (!arr || !arr.length) {
        return -1;
    }
    let indexOfItem = [];
    let numOfLoop = arr.length;
    for (let i = 0; i < numOfLoop; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(item)) {
            indexOfItem.push(i);
            arr.splice(i, 1);
            i--;
            numOfLoop--;
        }
    }
    return indexOfItem.length ? indexOfItem : -1;
}