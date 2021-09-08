Array.prototype.myMap = function (func) {
    const arr = this;
    return arr.reduce((pre, ele) => {
        return [...pre, func(ele)];
    }, []);
}