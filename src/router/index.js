import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/common/Home'
import HomePage from 'components/page/HomePage'
import EditorPage from 'components/page/EditorPage'
import MarkdownPage from 'components/page/MarkdownPage'
import BasicTable from 'components/table/BasicTable'
import ModalPage from 'components/page/ModalPage'
import FormPage from 'components/form/FormPage'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: Home,
        children: [{
            path: '',
            component: HomePage
        }, {
            path: '/HomePage',
            component: HomePage
        }, {
            path: '/EditorPage',
            component: EditorPage
        }, {
            path: '/MarkdownPage',
            component: MarkdownPage
        }, {
            path: '/BasicTable',
            component: BasicTable
        }, {
            path: '/ModalPage',
            component: ModalPage
        }, {
            path: '/FormPage',
            component: FormPage
        }]
    }]
})