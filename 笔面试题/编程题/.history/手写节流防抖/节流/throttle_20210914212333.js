// 时间戳的实现 首节流 第一次立即执行 但是停止触发后无法再次执行（最后一次不执行）
// function throttle(fn, interval) {
//     let last = 0;
//     return function () {
//         const now = Date.now();
//         if (now - last >= interval) {
//             last = now;
//             fn.apply(this, arguments);
//         }
//     }
// }

// 计时器的实现 伪节流 第一次不会立即执行 delay后才执行
// 最后一次触发后 delay后还会执行一次 
// function throttle(fn, delay) {
//     let timer = null;
//     return function () {
//         const context = this;
//         const args = arguments;
//         if (!timer) {
//             timer = setTimeout(function () {
//                 fn.apply(context, args);
//                 timer = null;
//             }, delay);
//         }
//     }
// }

// 基于计时器和时间戳的实现
function throttle(fn, delay) {
    let timer = null;
    let lastTime = 0;
    return function () {
        const context = this;
        const args = arguments;
        const nowTime = Date.now();
        const remainTime = delay - (nowTime - lastTime);
        clearTimeout(timer);
        if (remainTime <= 0) {
            // 即nowTime-lastTime >= delay
            fn.apply(context, args);
            lastTime = Date.now();
        } else {
            timer = setTimeout(() => {
                fn.apply(context, args);
                lastTime = Date.now();
            }, remainTime);
        }
    }
}

function handle() {
    console.log(new Date());
}

const throttleHandle = throttle(handle, 2000);

window.addEventListener('scroll', throttleHandle);