// func是用户传入需要防抖的函数
// wait是等待时间
const debounce = (func, wait = 50) => {
        // 缓存一个定时器id
        let timer = 0
            // 这里返回的函数是每次用户实际调用的防抖函数
            // 如果已经设定过定时器了就清空上一次的定时器
            // 开始一个新的定时器，延迟执行用户传入的方法
        return function(...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(this, args)
            }, wait)
        }
    }
    // 不难看出如果用户调用该函数的间隔小于 wait 的情况下，上一次的时间还未到就被清除了，并不会执行函数

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