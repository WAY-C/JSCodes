// 描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵：
// [[1,2,3,4],
// [5,6,7,8],
// [9,10,11,12],
// [13,14,15,16]]
// 则依次打印出数字
// [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
// 示例1
// 输入：
// [[1,2],[3,4]]
// 复制
// 返回值：
// [1,2,4,3]

function printMatrix(matrix) {
    // write code here
    let res = [];
    let xLen = matrix[0].length;
    let yLen = matrix.length;
    if (xLen == 1) {
        for (let i = 0; i < yLen; i++) {
            res.push(matrix[i][0]);
        }
    } else if (yLen == 1) {
        for (let i = 0; i < xLen; i++) {
            res.push(matrix[0][i]);
        }
    } else {
        let xStart = 0;
        let yStart = 0;
        let xEnd = xLen - 1;
        let yEnd = yLen - 1;
        while (res.length < xLen * yLen) {
            if (xStart > xEnd) {
                break;
            }
            for (let x = xStart; x <= xEnd; x++) {
                res.push(matrix[yStart][x]);
                console.log(res[res.length - 1]);
            }
            yStart++;
            if (yStart > yEnd) {
                break;
            }
            for (let y = yStart; y <= yEnd; y++) {
                res.push(matrix[y][xEnd]);
                console.log(res[res.length - 1]);
            }
            xEnd--;
            if (xStart > xEnd) {
                break;
            }
            for (let x = xEnd; x >= xStart; x--) {
                res.push(matrix[yEnd][x]);
                console.log(res[res.length - 1]);
            }
            yEnd--;
            if (yStart > yEnd) {
                break;
            }
            for (let y = yEnd; y >= yStart; y--) {
                res.push(matrix[y][xStart]);
                console.log(res[res.length - 1]);
            }
            xStart++;
        }
    }
    return res;
}
module.exports = {
    printMatrix: printMatrix
};