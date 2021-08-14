// 计算轨道周期
// 在这道题目中，我们需要写一个计算天体轨道周期（单位是秒）的函数。
// 它接收一个对象数组参数 arr，对象中包含表示天体名称的 name 属性，
// 及表示天体表面平均海拔的 avgAlt 属性。 
// 就像这样：{name: 'name', avgAlt: avgAlt}。
// 你可以在这条维基百科的链接中找到轨道周期的计算公式：
// T = 2 * pi * sqrt(a^3/GM)
// a = avgAlt + earthRadius
// 最终的计算结果应取整到最接近的整数。 在这里计算地球的轨道周期。
// 地球半径为 6367.4447 公里，地球的 GM 值为 398600.4418 km^3s^(-2) 。
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) 
// 应返回 [{name: "sputnik", orbitalPeriod: 86400}] 。

// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
// 应返回 [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var objArr = [];
    for (let obj of arr) {
        let newObj = {
            name: obj["name"],
            orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(obj["avgAlt"] + earthRadius, 3) / GM))
        }
        objArr.push(newObj);
    }
    return objArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
