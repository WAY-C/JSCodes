function onInput(event) {
    const value = event.target.value;
    if (value) {
        console.log(value);
    }
}

function debounce(fn, delay) {
    let timer = null;
    // 返回的一定是一个函数
    return function () {
        // 如果已经有定时器了，清除
        if (timer) {
            clearTimeout(timer);
        }
        // 重置定时器
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay);
    }
}

const debounceOninput = debounce(onInput, 300)
