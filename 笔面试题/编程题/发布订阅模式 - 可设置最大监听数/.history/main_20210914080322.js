class Eventbus {
    constructor(options = {}) {
        this.events = {};
        this.maxEventsNum = options.maxEventsNum;
        /**
         * {
         *  name1 : [cb1,cb2,cb3]
         * }
         */
    }

    on(ename, cb) {
        // 如果没有这个属性，即事件名未绑定任何回调函数
        if (this.maxEventsNum - Object.keys(this.events).length > 0) {
            if (!this.events[ename]) {
                this.events[ename] = [];
            }
            this.events[ename].push(cb);
        } else {
            console.error(`[ERROE!]${ename} has reached maximun number of listeners`)
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
const log = (value) => console.log(value);
const bus = new Eventbus({ maxEventsNum: 3 });

bus.once('log', log);
bus.on('add1', add);
bus.on('add1', add);
bus.on('add1', add);
bus.on('add1', add);
bus.emit('log', '第一次');
bus.emit('log', '第二次');
bus.emit('add1', 3, 2);
bus.off('add1');
bus.emit('add1', 1, 2);