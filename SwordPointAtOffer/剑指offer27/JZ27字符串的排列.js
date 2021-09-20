// 输入一个字符串，打印出该字符串中字符的所有排列。

// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

// 示例:
// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]

// 限制：
// 1 <= s 的长度 <= 8

// https://blog.nowcoder.net/n/5a8f9397dea54e5eb50a1aeb9c6e9311

function Permutation(str) {
    // write code here
    //新建结果数组，初始化为空字符串
    let res = [''];
    //遍历给定字符串中的每一个字符
    for (const char of str) {
        //新建一个Set(可以起到剪枝、去重的作用)
        const temp = new Set();
        //对于res数组中的每个字符串
        for (const cur of res) {
            //从尾到头依次操作
            for (let j = cur.length; j >= 0; j--) {
                //插空
                temp.add(cur.slice(0, j) + char + cur.slice(j));
            }
        }
        //更新res
        res = [...temp];
    }
    // 返回处理完最后得到的res
    return res;
}
module.exports = {
    Permutation: Permutation
};