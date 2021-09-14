class Eventbus {
    constructor(options = {}) {
        this.events = {};
        this.maxListeners = options.maxListeners || Infinity;
        /**
         * {
         *  name1 : [cb1,cb2,cb3]
         * }
         */
    }

    on(ename, cb) {
        // 如果没有这个属性，即事件名未绑定任何回调函数

        if (!this.events[ename]) {
            this.events[ename] = [];
        }
        if (this.maxListeners != Infinity && this.events[ename].length == this.maxListeners) {
            console.error(`[ERROE!]${ename} has reached maximun number of listeners`)
        } else {
            this.events[ename].push(cb);
        }
        return this;
    }

    emit(ename, ...args) {
        const cbs = this.events[ename];
        if (!cbs) {
            console.error(`[ERROE!]${ename} is not registered`);
            return this;
        }
        cbs.forEach((cb) => cb.apply(this, args));
        return this;

    }

    off(ename, cb) {
        if (!cb) {
            this.events[ename] = null;
        } else {
            this.events[ename] = this.events[ename].filter(item => item !== cb);
        }
        return this;
    }

    once(ename, cb) {
        const func = (...args) => {
            this.off(ename, func);
            cb.apply(this, args);
        }

        this.on(ename, func);
        return this;
    }
}
const add = (a, b) => console.log(a + b);
const add1 = (a, b) => console.log(a + b + 1);
const add2 = (a, b) => console.log(a + b + 2);
const add3 = (a, b) => console.log(a + b + 3);
const log = (value) => console.log(value);
const bus = new Eventbus({ maxListeners: 3 });

bus.once('log', log);
bus.on('add1', add);
bus.on('add1', add1);
bus.on('add1', add2);
bus.on('add1', add3);
// bus.emit('log', '第一次');
// bus.emit('log', '第二次');
bus.emit('add1', 3, 2);
bus.off('add1');