// FED13加粗显示

// 描述
// 使用一个标签将“牛客网”三个字加粗显示

// 给定的html代码：
// <p>牛客网，程序员必备求职神器</p>

// 解法1 修改html解决
// <p><strong>牛客网</strong>，程序员必备求职神器</p>

// 解法2 用JS解决
let p = document.getElementsByTagName("p")[0];
// 获取第一个p元素
p.innerHTML = p.innerText.replace("牛客网", "<strong>牛客网</strong>");
// 用加上<strong>标签的文本替换

// JS的另一种实现
// (function(w,d){
//     let p = document.querySelector('p')
//     p.innerHTML = `<strong>牛客网</strong>${p.innerText.replace(/牛客网/, '')}`
// })(window,document)

// 解法3 用CSS设置样式
// 但是题目会检查提交结果文档中strong标签的个数是否为1
// 用例输入 function() { return document.getElementsByTagName('strong').length }
// 预期输出 1
// 实际输出 0
// 所以这种方法不能通过本题目

// // HTML：
// <p><span>牛客网</span>，程序员必备求职神器</p>
// // CSS：
// span {
//     font-weight: bold;
// }