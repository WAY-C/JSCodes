function onInput(event) {
    const value = event.target.value;
    if (value) {
        console.log(value);
    }
}

function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay);
    }
}

const debounceOninput = debounce(onInput, 300)