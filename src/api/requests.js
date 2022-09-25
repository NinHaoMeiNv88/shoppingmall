//对于axios进行二次封装
import axios from "axios";

import nprogress from "nprogress";
import 'nprogress/nprogress.css'

const requests = axios.create({
    // 配置对象
    // 设置默认路径 
    baseURL:'/api',
    // 请求回来时间超过5秒就失败
    timeout:5000,
    
});
// const requests = axios.create({
//     baseURL:'/api',
//     timeout:5000,
//   });


// 请求前拦截器
requests.interceptors.request.use((config)=>{
    //进度条
    nprogress.start()
    return config
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 请求成功消失
    nprogress.done()
    // 成功
    return res.data
},(error)=>{
// 失败
    return Promise.reject(new Error('faile'));
})


//最后需要暴露:暴露的是添加新的功能的axios,即为requests
export default requests;




