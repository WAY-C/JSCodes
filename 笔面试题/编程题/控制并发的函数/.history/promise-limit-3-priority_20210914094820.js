const {
    urls,
    loadImg
} = require('./mock-priority');

class PromiseQueue {
    constructor(options = {}) {
        this.concurrency = options.concurrency || 1;
        this.currentCount = 0;
        this.pendingList = [];
    }

    // task是一个函数
    add(task) {
        this.pendingList.push(task);
        this.run();
    }

    run() {
        // 如果当前等待队列为空或并发数达到上限
        if (this.pendingList.length === 0 || this.currentCount === this.concurrency) {
            return;
        }
        this.currentCount++;
        //const fn = this.pendingList.shift();
        const { fn } = this.pendingList.sort((a, b) => b.priority - a.priority).shift();

        const promise = fn();
        promise.then(this.completeOne.bind(this)).catch(this.completeOne.bind(this));
    }

    completeOne() {
        this.currentCount--;
        this.run();
    }
}

const queue = new PromiseQueue({
    concurrency: 3
});

const formatTask = (url) => {
    return {
        fn: () => loadImg(url),
        priority: url.priority
    }
}

urls.forEach(url => {
    queue.add(formatTask(url));
})

const highTask = {
    info: "!!!High!!!",
    priority: 10,
    time: 2000
};

queue.add(formatTask(highTask))