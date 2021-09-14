let timerId = null;
function mockInterval(fn, delay, ...args) {
    const recur = function () {
        timerId = setTimeout(() => {
            fn.apply(this, args);
            recur();
        }, delay);
    }
    recur();
}

function mockClearSetInterval(id) {
    clearTimeout(id);
}

mockInterval((value) => {
    console.log(value);
}, 1000, 'Waylon');

setTimeout(() => {
    mockClearSetInterval.bind(timerId);
}, 4000);