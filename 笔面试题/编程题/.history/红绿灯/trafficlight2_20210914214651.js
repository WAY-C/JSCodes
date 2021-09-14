// 配置实现
const TRAFFIC_LIGHT_CONFIG = {
    'green': 3000,
    'yellow': 1000,
    'red': 2000
}

function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

async function changeColor(color) {
    let light = document.getElementById('TrafficLight');
    light.style.background = color;
    await delay(TRAFFIC_LIGHT_CONFIG[color]);
}

async function run() {
    for (let key in TRAFFIC_LIGHT_CONFIG) {
        changeColor(key);
    }

    run();
}
run();