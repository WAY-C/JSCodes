// 该文件用于创建vuex中最为核心的store
// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备action--用于响应组件中的动作
const actions = {}
// 准备mutations--用于操作数据（state）
const mutations = {}
// 准备state--用于存储数据
const state = {}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})

// // 创建store
// const store = new Vuex.Store({
//     actions:actions,
//     mutations:mutations,
//     state:state,
// })

// // 暴露（导出）store
// export default store 