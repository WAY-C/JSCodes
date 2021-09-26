function isValid(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    const regObj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            stack.push(s[i]);
        } else {
            const cur = stack.pop();
            if (s[i] !== regObj[cur]) {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
}