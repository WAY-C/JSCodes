// FED7时间格式化输出

// 描述
// 按所给的时间格式输出指定的时间
// 格式说明
// 对于 2014.09.05 13:14:20
// yyyy: 年份，2014
// yy: 年份，14
// MM: 月份，补满两位，09
// M: 月份, 9
// dd: 日期，补满两位，05
// d: 日期, 5
// HH: 24制小时，补满两位，13
// H: 24制小时，13
// hh: 12制小时，补满两位，01
// h: 12制小时，1
// mm: 分钟，补满两位，14
// m: 分钟，14
// ss: 秒，补满两位，20
// s: 秒，20
// w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五

// 示例1
// 输入：
// formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')

// 输出：
// 2014-09-05 13:14:20 星期五

function formatDate(t, str) {
    var obj = {
        yyyy: t.getFullYear(),
        // getFullYear() 方法可返回一个表示年份的 4 位数字
        yy: ("" + t.getFullYear()).slice(-2),
        // 数字无slice方法，用空字符串""与之进行+运算
        // 使其变成字符串类型然后使用slice方法，可用以下代码代替
        // yy:t.getFullYear().toString(10).slice(-2),
        M: t.getMonth() + 1,
        // getMonth() 方法可返回表示月份的数字
        // 返回值是0（一月）到11（十二月）之间的一个整数
        MM: ("0" + (t.getMonth() + 1)).slice(-2),
        // 如("0"+1).slice(-2)  返回字符串"01"
        // 如("0"+12).slice(-2)  返回字符串"12"
        d: t.getDate(),
        // 从 Date 对象返回一个月中的某一天 (1 ~ 31)
        dd: ("0" + t.getDate()).slice(-2),
        H: t.getHours(),
        // 返回 Date 对象的小时 (0 ~ 23)
        HH: ("0" + t.getHours()).slice(-2),
        h: t.getHours() % 12,
        hh: ("0" + t.getHours() % 12).slice(-2),
        m: t.getMinutes(),
        // 返回 Date 对象的分钟 (0 ~ 59)
        mm: ("0" + t.getMinutes()).slice(-2),
        s: t.getSeconds(),
        // 返回 Date 对象的秒数 (0 ~ 59)
        ss: ("0" + t.getSeconds()).slice(-2),
        w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
            // 从 Date 对象返回一周中的某一天 (0(周天) ~ 6（周六)
            // 把['日',.., '六']看做一个数组arr
            // 属性w的值为arr[0]~arr[6]
    };
    return str.replace(/([a-z]+)/ig, function($1) { return obj[$1] });
}