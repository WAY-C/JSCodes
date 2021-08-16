// FED34计时器
// 描述
// 实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出

function count(start, end) {
    // 方法1： setInterval
    console.log(start++); // 立即输出start
    let timer = setInterval(() => {
        if (start <= end) {
            console.log(start++);
        } else {
            clearInterval(timer);
        }
    }, 100);
    // 返回一个包含cancel方法的对象
    return {
        cancel: () => {
            clearInterval(timer);
        }
    };
    /*
    // 方法2 setTimeout
    // 虽然提交成功,但是是错的,递归达到边界才会return 对象,但是此时的cancel还有意义么
    if(start <= end) {
        console.log(start++); // 立刻输出start
        st = setTimeout(() => {
            count(start,end)
        },100);
    }
    return {
        cancel: function() {
            clearTimeout(st);
        }
    }
    */
}