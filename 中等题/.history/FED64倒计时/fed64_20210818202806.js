// FED64倒计时
// 描述
// 倒计时是web开发中常见的组件，请完成second和render两个函数，完成倒计时的显示部分
// 1、second函数的输入为整数，返回{day: Int, hour: Int, min: Int, second: Int}
// 2、render函数的输入为second函数的输出，将数据在页面对应的DOM元素上显示出来，格式如html所示
// 3、如果day为0，隐藏对应的DOM元素，否则显示（请直接使用已经实现的css代码）
// 4、数值不足两位，前面补充0
// html
{
    /* <div id="jsCountdown">
        <span>01天</span>
        <span>02:</span>
        <span>03:</span>
        <span>04</span>
    </div> */
}
// CSS
// .hide{
// 	display: none;
// }
// function second(second) {

// }

// function render(data) {

// }
function second(second) {
    var res,
        diff;
    res = {};
    diff = new Date(second * 1000); //用毫秒时间戳初始化日期对象
    res.day = diff.getUTCDate() - 1; //根据世界时从Date对象返回月中的一天 1-31
    res.hour = diff.getUTCHours(); //根据世界时返回Date对象的小时 0-23
    res.min = diff.getUTCMinutes(); //根据世界时返回 Date 对象的分钟 0-59
    res.second = diff.getUTCSeconds(); //根据世界时返回 Date 对象的秒钟 0-59
    return res; //返回倒计时对象做render的输入
}

function render(data) {
    var daySpan,
        hourSpan,
        minSpan,
        secSpan;
    var node = document.getElementById("jsCountdown");
    daySpan = node.children[0];
    hourSpan = node.children[1];
    minSpan = node.children[2];
    secSpan = node.children[3];
    //daySpan = document.querySelector("#jsCountdown span:nth-child(1)");
    //hourSpan = document.querySelector("#jsCountdown span:nth-child(2)");
    //minSpan = document.querySelector("#jsCountdown span:nth-child(3)");
    //secSpan = document.querySelector("#jsCountdown span:nth-child(4)");
    if (data.day === 0) {
        daySpan.setAttribute("class", "hide");
    } else {
        daySpan.innerHTML = (data.day <= 9 ? ("0" + data.day) : data.day) + "天";
    }
    hourSpan.innerHTML = (data.hour <= 9 ? ("0" + data.hour) : data.hour) + ":";
    minSpan.innerHTML = (data.min <= 9 ? ("0" + data.min) : data.min) + ":";
    secSpan.innerHTML = (data.second <= 9 ? ("0" + data.second) : data.second);
}