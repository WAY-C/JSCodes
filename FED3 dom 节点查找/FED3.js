// 描述
// 查找两个节点的最近的一个共同父节点，可以包括节点自身
// 输入描述：
// oNode1 和 oNode2 在同一文档中，且不会为相同的节点

//解法1 递归
function commonParentNode(oNode1, oNode2) {
    let parent1 = oNode1.parentNode;
    let parent2 = oNode2.parentNode;
    if (parent1 === parent2) {
        return parent1;
    } else {
        commonParentNode(parent1, parent2);
    }
}

//解法2 判断一个节点以及它的父节点是否包含另一个节点
function commonParentNode(oNode1, oNode2) {
    while (true) {
        oNode1 = oNode1.parentNode;
        if (oNode1.contains(oNode2)) {
            return oNode1;
        }
    }
}

//解法2拓展 两边找
function commonParentNode(oNode1, oNode2) {
    let parentNode1 = oNode1.parentNode;
    let parentNode2 = oNode2.parentNode;
    while (true) {
        if (parentNode1.contains(oNode2)) {
            return parentNode1;
        }
        if (parentNode2.contains(oNode1)) {
            return parentNode2;
        }
        parentNode1 = parentNode1.parentNode;
        parentNode2 = parentNode2.parentNode;
    }
}