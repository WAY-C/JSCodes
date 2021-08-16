// 星际穿越

// 小团在一次星际旅行中，耗尽了飞船的能量，迷失在了空间魔方中，
// 空间魔方中有N*N*N个能量粒子。
// 美团云AI迅速帮小团分析出了空间魔方的能量分布图。
// 已知小团的飞船被困在能量值最高的点，能量值最高点有且只有一个。
// 飞船每到达一个能量粒子就会吸收对应粒子的能量，
// 该粒子会坍缩成小黑洞，飞船不可到达。
// 小团驾驶的飞船只能从高能粒子驶向低能粒子，
// 且每次只能从6个方向中选择一个前进。（±x,±y,±z）。

// 请帮助帮小团吸收最高的能量值。

// 输入描述:
// N（0≤N≤8）

// N*N*N行空间能量数据，
// 格式为：X Y Z P，
// XYZ表示点坐标，P表示空间能量分布（0≤P）

// 输出描述:
// 输出一个整数，表示可吸收到的最高的能量值

// 链接：https://www.nowcoder.com/questionTerminal/ad9d9eef7b1c49b994f2b1c921417d94
// 来源：牛客网

// 示例1
// 输入
// 2
// 0 0 0 7
// 0 0 1 2
// 0 1 0 4
// 0 1 1 3
// 1 0 0 6
// 1 0 1 1
// 1 1 0 5
// 1 1 1 0
// 输出
// 28

// 示例2
// 输入
// 3
// 0 0 0 1
// 0 0 1 2
// 0 0 2 3
// 0 1 0 4
// 0 1 1 5
// 0 1 2 6
// 0 2 0 7
// 0 2 1 8
// 0 2 2 9
// 1 0 0 10
// 1 0 1 11
// 1 0 2 12
// 1 1 0 13
// 1 1 1 14
// 1 1 2 13
// 1 2 0 12
// 1 2 1 11
// 1 2 2 10
// 2 0 0 9
// 2 0 1 8
// 2 0 2 7
// 2 1 0 6
// 2 1 1 5
// 2 1 2 4
// 2 2 0 3
// 2 2 1 2
// 2 2 2 1
// 输出
// 89
let N = Number(readline());
var points = new Array(N + 1);
let maxEnergy = 0;
let maxPoint = {
    x: 0,
    y: 0,
    z: 0,
    value: -1
}
let go = [
    [0, 0, 1],
    [0, 0, -1],
    [0, 1, 0],
    [0, -1, 0],
    [1, 0, 0],
    [-1, 0, 0]
];
for (let i = 0; i <= N; i++) {
    points[i] = new Array(N + 1);
    for (let j = 0; j <= N; j++) {
        points[i][j] = new Array(N + 1);
        for (let k = 0; k <= N; k++) {
            points[i][j][k] = -1;
        }
    }
}
for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
        for (var k = 0; k < N; k++) {
            points[i][j][k] = Number(readline().split(" ")[3]);
            if (points[i][j][k] > maxPoint.value) {
                maxPoint.x = i;
                maxPoint.y = j;
                maxPoint.z = k;
                maxPoint.value = points[i][j][k];
            }
        }
    }
}

function dfs(points, x, y, z, e) {
    let e1 = e + points[x][y][z];
    for (let m = 0; m < 6; m++) {
        let a = x + go[m][0];
        let b = y + go[m][1];
        let c = z + go[m][2];
        if (a == N || a < 0 || b == N || b < 0 || c == N || c < 0) {
            continue;
        }
        if (points[a][b][c] >= points[x][y][z] || points[a][b][c] == -1) {
            // 若去过该点或无路可走
            continue;
        }
        let temp = points[x][y][z]; // 记下当前点的能量值
        points[x][y][z] = -1; // 暂记该点去过
        dfs(points, a, b, c, e1); // 向下一步搜索
        points[x][y][z] = temp; //无路可走时返回该点并删去标记
    }
    maxEnergy = Math.max(maxEnergy, e1); // 循环结束时（无路可走时），更新最大能量值，然后继续上一个点遍历
}

dfs(points, maxPoint.x, maxPoint.y, maxPoint.z, 0);
console.log(maxEnergy);

// 不建(N+1)*(N+1)*(N+1)数组时执行报错
// 程序异常退出，请检查是否存在语法错误或者数组越界非法访问等情况
// a.v8js:35: TypeError: Cannot read property '0' of undefined
// let e1 = e + points[x][y][z];
// ^
// TypeError: Cannot read property '0' of undefined
// at dfs (a.v8js:35:28)
// at a.v8js:55:1