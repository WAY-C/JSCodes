// DNA 配对
// 给出的 DNA 链上缺少配对元素。 请基于每个字符，获取与其配对的元素，并将结果作为二维数组返回。

// DNA 的碱基对 有两种形式：一种是 A 与 T，一种是 C 与 G。 请为参数中给出的每个字符配对相应的碱基。

// 注意，参数中给出的字符应作为每个子数组中的第一个元素返回。

// 例如，传入 GCG 时，应返回 [["G", "C"], ["C","G"], ["G", "C"]]。

// 字符和它的配对组成一个数组中，所有配对数组放在一个数组里。

// 解法1 使用switch进行匹配
function pairElement(str) {
    let ret = [];
    for (let ele of str) {
        switch (ele) {
            case "A":
                ret.push(["A", "T"]);
                break;
            case "T":
                ret.push(["T", "A"]);
                break;
            case "C":
                ret.push(["C", "G"]);
                break;
            case "G":
                ret.push(["G", "C"]);
                break;
        }
    }
    return ret;
}

pairElement("GCG");

// 解法2 使用map方法
function pairElement(str) {
    let pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    let arr = str.split("");
    return arr.map((ele) => [ele, pairs[ele]]);
}