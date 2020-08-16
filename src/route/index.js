import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index.vue'
import home from '../pages/home.vue'
// 安装与使用
import install from '../pages/install'
// 颜色主题
import theme from '../pages/theme'
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

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
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
                    explain: install
                }
            },
            {
                path: '/home/theme',
                name: 'theme',
                meta: { name: 'star-ui' },
                components: {
                    explain: theme
                }
            },
            {
                path: '/home/input',
                name: 'input-demo',
                meta: { name: 'star-input' },
                components: {
                    explain: inputText,
                    example: inputCom
                }
            },
            {
                path: '/home/button',
                name: 'button-demo',
                meta: { name: 'star-button' },
                components: {
                    explain: buttonText,
                    example: buttonCom
                }
            },
            {
                path: '/home/image',
                name: 'image-demo',
                meta: { name: 'star-image' },
                components: {
                    explain: imageText,
                    example: imageCom
                }
            },
            {
                path: '/home/icon',
                name: 'icon-demo',
                meta: { name: 'star-icon' },
                components: {
                    explain: iconText,
                    example: iconCom
                }
            },
            {
                path: '/home/checkbox',
                name: 'checkbox-demo',
                meta: { name: 'star-checkbox' },
                components: {
                    explain: checkboxText,
                    example: checkboxCom
                }
            },
        ]
    }
]

const router = new VueRouter({
    routes
})


export default router
