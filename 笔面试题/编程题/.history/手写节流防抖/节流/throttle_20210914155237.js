function throttle() {
    let lastTime = 0;
    return function () {
        const now = Date.now();
    }
}

function handle() {
    console.log(new Date());
}

const throttleHandle = throttle(handle, 2000);

window.addEventListener('scroll', throttleHandle);