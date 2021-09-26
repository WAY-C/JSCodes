function lengthOfLongestSubstring(str) {
    if (str.length === 0) {
        return 0;
    }
    let left = 0;
    let right = 1;
    let max = 0;
    while (right <= str.length) {
        let lr = str.slice(left, right);
        const index = lr.indexOf(str[right]);
        if (index > -1) {
            left = left + index + 1;
        } else {
            lr = str.slice(left, right + 1);
            max = Math.max(max, lr.length);
        }
        right++;
    }
    return max;
}