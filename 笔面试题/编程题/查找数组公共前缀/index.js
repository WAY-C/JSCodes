function longestCommonPrefix(strs) {
    const str = strs[0];
    let index = 0;
    while (index < str.length) {
        const curStr = str.slice(0, index + 1);
        for (let i = 0; i < strs.length; i++) {
            // 存在一个字符串元素不存在或为空
            // 或存在一个字符串元素不以当前前缀开始
            if (!strs[i] || !str[i].startsWith(curStr)) {
                return str.slice(0, index);
            }
        }
        index++;
    }
    return str;
}