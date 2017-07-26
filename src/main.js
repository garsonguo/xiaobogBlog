// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// 引入element-ui的默认CSS样式
import 'element-ui/lib/theme-default/index.css'

import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式

import './mock/index.js'; // 该项目所有请求使用mockjs模拟

import '../static/utf8-php/ueditor.config.js'
import '../static/utf8-php/ueditor.all.min.js'
import '../static/utf8-php/lang/zh-cn/zh-cn.js'
import '../static/utf8-php/ueditor.parse.min.js'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    NProgress.start(); // 开启Progress
    if (to.meta.requireAuth) {
        var userSession = sessionStorage.getItem('user');

        if (userSession) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }

});
router.afterEach(() => {
    NProgress.done(); // 结束Progress
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})