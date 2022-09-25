import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 设置三级联动为全局
import TypeNav from '@/components/TypeNav'
// 使用component 挂载到全局

// 引用仓库
import store from '@/store'

// 
Vue.component(TypeNav.name,TypeNav)

new Vue({
    render:h=>h(App),
    router,
    store
}).$mount('#app')