function intervalSchedule(intervals) {
    if (intervals.length == 0) {
        return 0;
    }

    intervals.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let xEnd = intervals[0][1];

    for (let intv of intervals) {
        if (intv[0] >= xEnd) {
            count++;
            xEnd = intv[1];
        }
    }

    return count;
}