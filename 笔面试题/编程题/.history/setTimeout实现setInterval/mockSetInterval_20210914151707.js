let timerId = null;
function mockInterval(fn, delay, ...args) {
    const recur = function () {
        timerId = setTimeout(function () {
            fn.apply(args);

        }, delay);
    }
}