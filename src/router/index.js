import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/page/Login'
import Home from 'components/common/Home'
import HomePage from 'components/page/HomePage'
import EditorPage from 'components/page/EditorPage'
import MarkdownPage from 'components/page/MarkdownPage'
import BasicTable from 'components/table/BasicTable'
import FixedTable from 'components/table/FixedTable'
import DynamicTable from 'components/table/DynamicTable'
import SortFilter from 'components/table/SortFilter'
import ModalPage from 'components/page/ModalPage'
import FormPage from 'components/form/FormPage'
import TypicalForm from 'components/form/TypicalForm'
import NotFound from 'components/page/NotFound'
import Comprehensive from 'components/page/Comprehensive'
import Upload from 'components/page/Upload'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/login',
            component: Login,
            name: '登录'
        },
        {
            path: '',
            component: Home,
            children: [{
                path: '/',
                component: HomePage,
                name: '主页',
                meta: {
                    requireAuth: true,
                },
            }, {
                path: '/HomePage',
                component: HomePage,
                name: '主页'
            }, {
                path: '/EditorPage',
                component: EditorPage,
                name: '文本编辑器'
            }, {
                path: '/MarkdownPage',
                component: MarkdownPage,
                name: 'Markdown编辑器'
            }, {
                path: '/BasicTable',
                component: BasicTable,
                name: '基础表格'
            }, {
                path: '/FixedTable',
                component: FixedTable,
                name: '固定表头、列'
            }, {
                path: '/DynamicTable',
                component: DynamicTable,
                name: '动态表格'
            }, {
                path: '/SortFilter',
                component: SortFilter,
                name: '排序与筛选'
            }, {
                path: '/ModalPage',
                component: ModalPage,
                name: '模态框'
            }, {
                path: '/FormPage',
                component: FormPage,
                name: '表单'
            }, {
                path: '/TypicalForm',
                component: TypicalForm,
                name: '典型表单'
            }, {
                path: '/NotFound',
                component: NotFound,
                name: '404'
            }, {
                path: '/Comprehensive',
                component: Comprehensive,
                name: '增删改查'
            }, {
                path: '/Upload',
                component: Upload,
                name: '增删改查'
            }]
        }
    ]
})