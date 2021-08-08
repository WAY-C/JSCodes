// FED30避免全局变量

// 描述
// 给定的 js 代码中存在全局变量，请修复

// 给定的代码
// function globals() {
//     myObject = {
//       name : 'Jory'
//     };

//     return myObject;
// }
function globals() {
    // 1
    function globals() {
        var myObject = {
            // let myObject = {
            name: 'Jory'
        };

        return myObject;
    }

    // 2
    function myObject() {
        return { name: 'Jory' };
        // name : 'Jory'
    };

    return myObject;
}