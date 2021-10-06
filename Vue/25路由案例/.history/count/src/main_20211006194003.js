// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'

// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 应用插件
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
}).$mount('#app')
