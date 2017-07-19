import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/common/Home'
import HomePage from 'components/page/HomePage'
import EditorPage from 'components/page/EditorPage'
import MarkdownPage from 'components/page/MarkdownPage'
import BasicTable from 'components/table/BasicTable'
import FixedTable from 'components/table/FixedTable'
import DynamicTable from 'components/table/DynamicTable'
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
            path: '/FixedTable',
            component: FixedTable
        }, {
            path: '/DynamicTable',
            component: DynamicTable
        }, {
            path: '/ModalPage',
            component: ModalPage
        }, {
            path: '/FormPage',
            component: FormPage
        }]
    }]
})