import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index.vue'
import home from '../pages/home.vue'
// 安装与使用
import install from '../pages/install'
// 颜色主题
import theme from '../pages/theme'
// 组件首页
import comIndex from '../pages/com-index'
// transition过渡
import transitionText from '../pages/transition-demo/demo'
import transitionCom from '../pages/transition-demo/transition'
// 输入框
import inputText from '../pages/input-demo/demo'
import inputCom from '../pages/input-demo/input'
// 按钮
import buttonText from '../pages/button-demo/demo'
import buttonCom from '../pages/button-demo/button'
// 图片
import imageText from '../pages/image-demo/demo'
import imageCom from '../pages/image-demo/image'
// 图标
import iconText from '../pages/icon-demo/demo'
import iconCom from '../pages/icon-demo/icon'
// 复选框
import checkboxText from '../pages/checkbox-demo/demo'
import checkboxCom from '../pages/checkbox-demo/checkbox'
// 导航组件
import navbarText from '../pages/navbar-demo/demo'
import navbarCom from '../pages/navbar-demo/navbar'
// 分类栏组件
import tabText from '../pages/tab-demo/demo'
import tabCom from '../pages/tab-demo/tab'
// 消息通知组件
import noticeText from '../pages/notice-demo/demo'
import noticeCom from '../pages/notice-demo/notice'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
    },
    {
        path: '/home',
        name: 'home',
        redirect: '/home/install',
        component: home,
        children: [
            {
                path: '/home/install',
                name: 'install',
                meta: { name: 'star-ui' },
                components: {
                    explain: install,
                    example: comIndex,
                },
            },
            {
                path: '/home/theme',
                name: 'theme',
                meta: { name: 'star-ui' },
                components: {
                    explain: theme,
                    example: comIndex,
                },
            },
            {
                path: '/home/transition',
                name: 'transition-demo',
                meta: { name: 'star-transition' },
                components: {
                    explain: transitionText,
                    example: transitionCom,
                },
            },
            {
                path: '/home/input',
                name: 'input-demo',
                meta: { name: 'star-input' },
                components: {
                    explain: inputText,
                    example: inputCom,
                },
            },
            {
                path: '/home/button',
                name: 'button-demo',
                meta: { name: 'star-button' },
                components: {
                    explain: buttonText,
                    example: buttonCom,
                },
            },
            {
                path: '/home/image',
                name: 'image-demo',
                meta: { name: 'star-image' },
                components: {
                    explain: imageText,
                    example: imageCom,
                },
            },
            {
                path: '/home/icon',
                name: 'icon-demo',
                meta: { name: 'star-icon' },
                components: {
                    explain: iconText,
                    example: iconCom,
                },
            },
            {
                path: '/home/checkbox',
                name: 'checkbox-demo',
                meta: { name: 'star-checkbox' },
                components: {
                    explain: checkboxText,
                    example: checkboxCom,
                },
            },
            {
                path: '/home/navbar',
                name: 'navbar-demo',
                meta: { name: 'star-navbar' },
                components: {
                    explain: navbarText,
                    example: navbarCom,
                },
            },
            {
                path: '/home/tabbar',
                name: 'tabbar-demo',
                meta: { name: 'star-tab' },
                components: {
                    explain: tabText,
                    example: tabCom,
                },
            },
            {
                path: '/home/notice',
                name: 'notice-demo',
                meta: { name: 'star-notice' },
                components: {
                    explain: noticeText,
                    example: noticeCom,
                },
            },
        ],
    },
]

const router = new VueRouter({
    routes,
})

export default router
