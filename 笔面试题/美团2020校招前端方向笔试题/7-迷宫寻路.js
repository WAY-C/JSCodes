// 迷宫寻路

// 给定一个包含非负整数的 M x N 迷宫，请找出一条从左上角到右下角的路径，
// 使得路径上的数字总和最小。每次只能向下或者向右移动一步。

// 输入描述:
// 第一行包含两个整数M和N，以空格隔开，1≤N≤10，1≤N≤10。
// 接下来的M行中，每行包含N个数字 。

// 输出描述:
// 找出总和最小的路径，输出路径上的数字总和。


// 输入例子1:
// 3 3
// 1 3 1
// 1 5 1
// 4 2 1

// 输出例子1:
// 7

let MN = readline().split(" ").map(Number);
let [M, N] = [...MN];
let arr = [];
for (let i = 0; i < M; i++) {
    arr.push(readline().split(" ").map(Number));
}
console.log(getMin(M, N, arr));

function getMin(M, N, weight) {
    let min = new Array(M);
    for (let i = 0; i < M; i++) {
        min[i] = new Array(N).fill(Infinity);
    }
    min[0][0] = weight[0][0];
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (j + 1 < N) {
                min[i][j + 1] = Math.min(min[i][j + 1], min[i][j] + weight[i][j + 1]);
            }
            if (i + 1 < M) {
                min[i + 1][j] = Math.min(min[i + 1][j], min[i][j] + weight[i + 1][j]);
            }
        }
    }
    return min[M - 1][N - 1];
}