import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index.vue'
import home from '../pages/home.vue'
// 输入框
import inputText from '../pages/input-demo/demo'
import inputCom from '../pages/input-demo/input'
// 按钮
import buttonText from '../pages/button-demo/demo'
import buttonCom from '../pages/button-demo/button'

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
        redirect: '/home/input',
        component: home,
        children: [
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
        ]
    }
]

const router = new VueRouter({
    routes
})


export default router
