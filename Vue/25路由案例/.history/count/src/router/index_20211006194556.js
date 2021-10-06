// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Projects from '../components/Projects'
// 创建一个路由器
const router = new VueRouter({
    routes: [
        {
            path: "/Home",
            component: Home
        },
        {
            path: "/Projects",
            component: Projects
        }
    ]
})

// 暴露路由器
export default router