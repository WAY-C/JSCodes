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
            name: "HOME",
            path: "/home",
            component: Home
        },
        {
            name: "PROJECTS",
            path: "/projects",
            component: Projects,
            children: [
                {
                    name: "BASIC",
                    path: "basic",
                    component: Basic,
                    children: [
                        {
                            name: "DETAIL",
                            path: "detail",
                            component: Detail
                        }
                    ]
                },
                {
                    name: "VUECLI",
                    path: "vuecli",
                    component: Vuecli,
                }
            ]
        }
    ]
})

// 暴露路由器
export default router