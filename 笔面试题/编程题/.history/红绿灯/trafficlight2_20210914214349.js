// 封装实现
const TRAFFIC_LIGHT_CONFIG = {
    'green': 3000,
    'yellow': 1000,
    'red': 2000
}

function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(), duration);
    });
}

async function changeColor(color, duration) {
    let light = document.getElementById('TrafficLight');
    light.style.background = color;
    await delay(duration);
}

async function run() {
    await changeColor('green', 3000);
    await changeColor('yellow', 1000);
    await changeColor('red', 2000);

    run();
}
run();