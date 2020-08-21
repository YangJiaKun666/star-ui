import '../styles/index.less' // 全局样式文件
// 普通组件
import starInput from './input/input.vue'
import starIcon from './icon/icon.vue'
import starButton from './button/button.vue'
import starCheckbox from './checkbox/checkbox.vue'
import starTabs from './tabs/tabs.vue'
import starTbaItem from './tab-item/tab-item.vue'
import starNavbar from './navbar/navbar.vue'
import starNavbarItem from './navbar-item/navbar-item.vue'
import starCarousel from './carousel/carousel.vue'
import starCarouselItem from './carousel-item/carousel-item.vue'
import starImage from './image/image.vue'
import starTransition from './transition/transition.vue'
import starPopup from './popup/popup.vue'
import starActionSheet from './action-sheet/action-sheet.vue'

// 消息提示，请提示，二次确认弹框
import starNotice from './notice/notice.js'

const components = [
    starInput,
    starIcon,
    starButton,
    starCheckbox,
    starTabs,
    starTbaItem,
    starNavbar,
    starNavbarItem,
    starCarousel,
    starCarouselItem,
    starImage,
    starTransition,
    starPopup,
    starActionSheet,
]
const install = function(Vue, options = {}) {
    Vue.nextTick(() => {
        //  自定义主题
        // let app = document.getElementById('app')
        let app = document.body
        app.className = 'star-theme-custom'
        app.style.setProperty('--backColor', options.backColor || '')
        app.style.setProperty('--fColor', options.textColor || '')
        app.style.setProperty('--fActiveColor', options.fActiveColor || '')
    })
    components.map((component) => {
        Vue.component(component.name, component)
    })
    Vue.use(starNotice)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    starInput,
    starIcon,
    starButton,
    starCheckbox,
    starTabs,
    starTbaItem,
    starNavbar,
    starNavbarItem,
    starCarousel,
    starCarouselItem,
    starImage,
    starTransition,
    starPopup,
    starActionSheet,
}
