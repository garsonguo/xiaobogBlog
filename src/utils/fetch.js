import axios from 'axios';
import { Loading, Message } from 'element-ui';

// 创建axios实例
const service = axios.create({
    baseURL: 'https://xiaobog',
    timeout: 5000 // 请求超时时间
});
var loadinginstace;
// request拦截器
service.interceptors.request.use(config => {
    loadinginstace = Loading.service({ fullscreen: true });
    return config;
}, error => {
    loadinginstace.close();
    Message.error({
        message: '加载超时'
    });
    Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
    response => {
        loadinginstace.close();
        return response;
    },
    error => {
        loadinginstace.close();
        console.log('err' + error); // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
)

export default service;