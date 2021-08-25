// FED15设置文字颜色   
// 描述
// 请使用嵌入样式将所有p标签设置为红色文字
// 给定html代码：
// <p>欢迎来到牛客网</p>
// <p>在这里，我们为你提供了IT名企的笔试面试题库</p>
// <p>在这里，我们以题会友</p>
// 从CSS 样式代码插入的形式来看基本可以分为以下3种：内联式、嵌入式和外部式三种。
// 本题要求的是嵌入式，也就是将相关设置写在<head>标签包裹的<style type="text/css"></style>中间
// 如果直接在html文档中修改：
/* 
<style type="text/css">
    p {
        color: rgb(255,0,0);
    }
</style>
<p>欢迎来到牛客网</p>
<p>在这里，我们为你提供了IT名企的笔试面试题库</p>
<p>在这里，我们以题会友</p> 
 */
// 虽然可以生效且通过，但这里有个问题是题目给出的html代码仅有三个p标签，
// 所以我怀疑这里仅是body标签内部的部分，将style写在这里不符合通常的做法，
// 所以决定用JavaScript实现：
let head = document.head;
let style = document.createElement("style");
style.type = "text/css";
style.innerHTML = "p {color: rgb(255,0,0);}";
head.appendChild(style);