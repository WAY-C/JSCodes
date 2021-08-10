// FED14段落标识

// 描述
// 请将下面这句话以段落的形式展示在浏览器中——“牛客网是一个专注于程序员的学习和成长的专业平台。”
// 给定代码：
// html:
// 牛客网是一个专注于程序员的学习和成长的专业平台。

// 综合讨论区各大佬的解法整理如下：

// // 解法1 HTML简单实现
// <p>牛客网是一个专注于程序员的学习和成长的专业平台。</p> 

// 解法2 JS实现 修改给定的HTML代码，定位body并用带p标签的文本代替原文本
let body = document.getElementsByTagName("body")[0];
body.innerHTML = body.innerText.replace("牛客网是一个专注于程序员的学习和成长的专业平台。", "<p>牛客网是一个专注于程序员的学习和成长的专业平台。</p>");

// // 解法3 JS实现 获取给定HTML代码中的文本，删除原子节点，给获取的文本加上p标签，然后插入页面
// const pInnerText = document.body.childNodes[0].textContent.trim();
// document.body.removeChild(document.body.childNodes[0]);
// const p = document.createElement('p');
// p.innerHTML = pInnerText;
// document.body.appendChild(p);

// // 解法4 JS实现 创建一个p标签，嵌入到body中，缺点是没有删除给定的不带p标签的文本
// let p = document.createElement("p");
// p.innerText = "牛客网是一个专注于程序员的学习和成长的专业平台。";
// document.body.append(p);
// // document.querySelector("body").append(p);
// // body不需要selector，直接document.body就可以了

// // 解法5 JS使用document.write，缺点是没有删除给定的不带p标签的文本
// document.write('<p>牛客网是一个专注于程序员的学习和成长的专业平台。</p>');