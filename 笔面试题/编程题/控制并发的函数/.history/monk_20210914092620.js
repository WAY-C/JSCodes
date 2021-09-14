const urls = [{
    info: "link1",
    time: 3000
},
{
    info: "link2",
    time: 2000
},
{
    info: "link3",
    time: 5000
},
{
    info: "link4",
    time: 1000
},
{
    info: "link5",
    time: 1200
},
{
    info: "link6",
    time: 2000
},
{
    info: "link7",
    time: 800
},
{
    info: "link8",
    time: 3000
},
];

function loadImg(url) {
    return new Promise((resolve, reject) => {
        console.log("----" + url.info + "  start!!")
        setTimeout(() => {
            console.log(url.info + "  OK!!");
            resolve();
        }, url.time)
    })
};

module.exports = {
    urls,
    loadImg
}