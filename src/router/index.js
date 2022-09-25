import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Search from '@/pages/search'

export default new VueRouter(
    {
        routes:[
            {
                path: "/home", //主页
                component:Home,
                meta:{
                    show:true
                }
            },
            {
                path: "/login", //登录
                component:Login,
                meta:{
                    show:false
                }
            },
            {
                path: "/register", //注册
                component:Register,
                meta:{
                    show:false
                }
            },
            {
                path: "/search/:keyword?", //搜索
                component:Search,
                meta:{
                    show:true
                },
                name: "search"
            }
            ,
            {
                path: "*",
                redirect:"/home"
            }
        ]
    }
)