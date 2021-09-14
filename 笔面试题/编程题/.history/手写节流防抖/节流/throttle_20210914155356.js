function throttle(fn, interval) {
    let lastTime = 0;
    return function () {
        const now = Date.now();
        if (now - last >= interval) {
            last = now;
            fn.apply(this, arguments);
        }
    }
}

function handle() {
    console.log(new Date());
}

const throttleHandle = throttle(handle, 2000);

window.addEventListener('scroll', throttleHandle);