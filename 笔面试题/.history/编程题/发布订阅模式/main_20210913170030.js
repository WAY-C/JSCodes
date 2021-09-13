class Eventbus {
    constructor() {
        this.events = {};
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
        this.events[ename].push(cb);
        return this;
    }

    emit(ename, ...args) {
        const cbs = this.events[ename];
        if (!cbs) {
            console.error(`${ename} is not registered`);
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
            cb.call(this, args);
        }

        this.on(ename, func);
        return this;
    }
}
const add = (a, b) => console.log(a + b);
const log = (args) => console.log(args);
const bus = new Eventbus();

bus.once('log', log);
bus.on('add1', add);
bus.emit('log', '第一次');
bus.emit('log', '第二次');