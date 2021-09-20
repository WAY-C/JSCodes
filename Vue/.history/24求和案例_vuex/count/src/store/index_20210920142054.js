// 该文件用于创建vuex中最为核心的store

// 引入Vuex
import Vuex from 'vuex'
// 准备action--用于响应组件中的动作
const actions = {}
// 准备mutations--用于操作数据（state）
const mutataions = {}
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