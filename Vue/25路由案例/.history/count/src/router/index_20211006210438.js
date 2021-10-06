// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Basic from '../pages/Basic'
import Vuecli from '../pages/Vuecli'
import Detail from '../pages/Detail'
// 创建一个路由器
const router = new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/projects",
            component: Projects,
            children: [
                {
                    path: "basic",
                    component: Basic,
                    hildren: [
                        {
                            path: "detail",
                            component: Detail
                        }
                    ]
                },
                {
                    path: "vuecli",
                    component: Vuecli,
                }
            ]
        }
    ]
})

// 暴露路由器
export default router