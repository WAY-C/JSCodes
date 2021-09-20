// 该文件用于创建vuex中最为核心的store
// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备action--用于响应组件中的动作
const actions = {
    additionOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADDITION', value);
        }
    },
    additionWait(context, value) {
        setTimeout(() => {
            context.commit('ADDITION', value);
        }, 400);
    },
}
// 准备mutations--用于操作数据（state）
const mutations = {
    ADDITION(state, value) {
        state.sum += value;
    },
    SUBTRACTION(state, value) {
        state.sum -= value;
    }
}
// 准备state--用于存储数据
const state = {
    sum: 0
}
// 准备getters--用于将state中的数据进行加工
const getters = {
    tenTimesSum() {
        return state.sum * 10;
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})

// // 创建store
// const store = new Vuex.Store({
//     actions:actions,
//     mutations:mutations,
//     state:state,
// })

// // 暴露（导出）store
// export default store 