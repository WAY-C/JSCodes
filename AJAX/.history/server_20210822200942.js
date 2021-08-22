// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装

// 客户端浏览器向服务器发送请求时URL的路径（请求行的第二段内容）
// 为 /server 时，执行回调函数里的代码，并由response做出响应
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    response.send('HELLO AJAX');
});

app.post('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应体
    response.send('HELLO AJAX HOST');
});

app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个对象
    const data = {
        name: 'Waylon'
    };
    // 对对象进行字符串转换
    const str = JSON.stringify(data);
    // 设置响应体
    // response.send('HELLO AJAX JSON');
    response.send(str);
});
// ie缓存
app.get('/ie', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    response.send('HELLO IE');
});
// 延迟响应
app.get('/delay', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        // 设置响应体
        response.send('延时响应');
    }, 3000);
});
//fetch
app.all('/fetch-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个对象
    // const data = {
    //     name: 'Waylon'
    // };
    // 对对象进行字符串转换
    // const str = JSON.stringify(data);
    // 设置响应体
    response.send('HELLO fetch AJAX');
    // response.send(str);
});
// axios
app.all('/axios-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个对象
    // let data = {
    // name: 'Waylon'
    // };
    // 对对象进行字符串转换
    // const str = JSON.stringify(data);
    // 设置响应体
    response.send('HELLO AJAX JSON');
    // response.send(str);
});
app.all('/jasonp-server', (request, response) => {
    response.send("hello JSONP");
});
// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中......");
});