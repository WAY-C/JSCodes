const {
    urls,
    loadImg
} = require('./mock.js');

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
        if (this.pendingList.length === 0 || this.currentCount === this.concurrency) {
            return;
        }
        this.currentCount++;
        const fn = this.pendingList.shift();
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

urls.forEach(url => {
    queue.add(() => loadImg(url));
})