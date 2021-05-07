import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home"
import Charge from "@/views/Charge";
import Discuss from "@/views/Discuss";
import Computer from "@/views/Computer";
import Calendar from "@/views/Calendar";
import CalendarAnalysis from "@/views/CalendarAnalysis";
import Triangle from "@/views/Triangle";


Vue.use(Router)


const routes = [

    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '首页',
            name: '首页'
        },

        children: [
            {
                path: "/triangle",
                component: Triangle,
                meta: {
                    name: "三角形"
                }
            },

            {
                path: '/discuss',
                component: Discuss,
                meta: {
                    name: '讨论题'
                }
            },
            {
                path: '/computer',
                component: Computer,
                meta: {
                    name: '电脑销售系统'
                }
            },
            {
                path: '/charge',
                component: Charge,
                meta: {
                    name: '电信收费系统'
                }
            },
            {
                path: "/calendar",
                component: Calendar,
                meta: {
                    name: "万年历"
                }
            },
           
            {
                path: "/CalendarAnalysis",
                component: CalendarAnalysis,
                meta: {
                    name: "万年历分析"
                }
            },

        ]
    }

]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router