// 调用请求方法
import { reqCategoryList } from "@/api"


// 存储数据
const state = {
    categoryList:[]
 }
// 唯一可以修改数据的地方
const mutations = {
    CAREGORYLIST(state,categoryList){
            state.categoryList = categoryList
    }
}
// 可以处理异步方法
const actions = {
    async categoryList({commit}){
        const result =  await reqCategoryList()
        console.log(result)

        if(result.code == 200){
            commit('CAREGORYLIST',result.data)
        }
    }
}
// 类似计算属性
const getters = {}

// 导出
export default {
    state,
    mutations,
    actions,
    getters
}