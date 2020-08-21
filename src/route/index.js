import Vue from 'vue'
import VueRouter from 'vue-router'
// 组件首页
import comIndex from '../pages/com-index'
// transition过渡
import transitionCom from '../pages/transition-demo/transition'
// 输入框
import inputCom from '../pages/input-demo/input'
// 按钮
import buttonCom from '../pages/button-demo/button'
// 图片
import imageCom from '../pages/image-demo/image'
// 图标
import iconCom from '../pages/icon-demo/icon'
// 复选框
import checkboxCom from '../pages/checkbox-demo/checkbox'
// 导航
import navbarCom from '../pages/navbar-demo/navbar'
// 分类栏
import tabCom from '../pages/tab-demo/tab'
// 消息通知
import noticeCom from '../pages/notice-demo/notice'
// 弹出层
import popupCom from '../pages/popup-demo/popup'
// 操作面板
import actionSheetCom from '../pages/action-sheet-demo/action-sheet'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/home/install',
    },
    {
        path: '/home/install',
        name: 'install',
        meta: { name: 'star-ui' },
        component: comIndex,
    },
    {
        path: '/home/theme',
        name: 'theme',
        meta: { name: 'star-ui' },
        component: comIndex,
    },
    {
        path: '/home/transition',
        name: 'transition-demo',
        meta: { name: 'star-transition' },
        component: transitionCom,
    },
    {
        path: '/home/input',
        name: 'input-demo',
        meta: { name: 'star-input' },
        component: inputCom,
    },
    {
        path: '/home/button',
        name: 'button-demo',
        meta: { name: 'star-button' },
        component: buttonCom,
    },
    {
        path: '/home/image',
        name: 'image-demo',
        meta: { name: 'star-image' },
        component: imageCom,
    },
    {
        path: '/home/icon',
        name: 'icon-demo',
        meta: { name: 'star-icon' },
        component: iconCom,
    },
    {
        path: '/home/checkbox',
        name: 'checkbox-demo',
        meta: { name: 'star-checkbox' },
        component: checkboxCom,
    },
    {
        path: '/home/navbar',
        name: 'navbar-demo',
        meta: { name: 'star-navbar' },
        component: navbarCom,
    },
    {
        path: '/home/tabbar',
        name: 'tabbar-demo',
        meta: { name: 'star-tab' },
        component: tabCom,
    },
    {
        path: '/home/notice',
        name: 'notice-demo',
        meta: { name: 'star-notice' },
        component: noticeCom,
    },
    {
        path: '/home/popup',
        name: 'popup-demo',
        meta: { name: 'star-popup' },
        component: popupCom,
    },
    {
        path: '/home/action-sheet',
        name: 'action-sheet-demo',
        meta: { name: 'star-action-sheet' },
        component: actionSheetCom,
    },
]

const router = new VueRouter({
    routes,
})

export default router
