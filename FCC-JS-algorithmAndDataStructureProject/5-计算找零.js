// 计算找零
// 请编写一个用于收银机的函数 checkCashRegister()：
// 它的第一个参数为售价 price、
// 第二个参数为支付金额 cash、
// 第三个参数为收银机內的金额 cid。

// cid 是包含货币面值的二维数组。
// 函数 checkCashRegister() 应返回含有 status 属性和 change 属性的对象。
// 如果收银机內的金额少于应找回的零钱数，或者你无法返回确切的数目时，
// 返回 {status: "INSUFFICIENT_FUNDS", change: []}。
// 如果收银机內的金额恰好等于应找回的零钱数，
// 返回 {status: "CLOSED", change: [...]}，其中 change 的属性值就是收银机內的金额。
// 否则，
// 返回 {status: "OPEN", change: [...]}，其中 change 键值是应找回的零钱数，并将找零的面值由高到低排序。
// 下面的抽屉里现金数组示例：
// [
// ["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]
// ]
function checkCashRegister(price, cash, cid) {
    var change = []; //储存结果
    var cid_obj = { //存储值和数量
        "ONE HUNDRED": { val: 100 },
        "TWENTY": { val: 20 },
        "TEN": { val: 10 },
        "FIVE": { val: 5 },
        "ONE": { val: 1 },
        "QUARTER": { val: 0.25 },
        "DIME": { val: 0.1 },
        "NICKEL": { val: 0.05 },
        "PENNY": { val: 0.01 }
    };
    var ret = { //返回的对象
        status: "",
        change: []
    };

    for (var a of cid) {
        cid_obj[a[0]].num = Math.ceil(a[1] / cid_obj[a[0]].val);
        //更新不同面值货币的数量
    }

    if (price == cash) { //如果不需要找零
        ret.status = "OPEN";
        ret.change = [];
        return ret;
    } else {
        var cha = cash - price; //需要找零的钱
        for (let k of Object.keys(cid_obj)) {
            var count = 0;
            while (cha >= cid_obj[k].val && cid_obj[k].num !== 0) { //没有完成找零且当前零钱可以找零
                cha = (cha - cid_obj[k].val).toFixed(2); //这里需要四舍五入成2位小数，不然会有计算误差
                cid_obj[k].num--;
                count++;
                if (cid_obj[k].num === 0 || cha < cid_obj[k].val) { //如果没零钱了
                    change.push([k, cid_obj[k].val * count]);
                    break;
                }

            }
        }

        if (cha == 0) { //找开了
            if (cid_obj["PENNY"].num == 0) { //如果收银机內的金额恰好等于应找回的零钱数
                ret.status = "CLOSED";
                ret.change = cid.slice(0);
                return ret;
            } else {
                ret.status = "OPEN";
                ret.change = change;
                return ret;
            }
        } else { //收银机內的金额少于应找回的零钱数，或者你无法返回确切的数目
            ret.status = "INSUFFICIENT_FUNDS";
            return ret;
        }
    }
}

console.log(checkCashRegister(19.50, 20.00, [
    ["PENNY", 0.50],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]));