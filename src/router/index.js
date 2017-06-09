import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/common/Home'
import Hello from 'components/page/Hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: Home,
        children: [{
            path: '',
            component: Hello
        }, {
            path: '/Hello',
            component: Hello
        }]
    }]
})