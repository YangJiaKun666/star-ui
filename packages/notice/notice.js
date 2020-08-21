import Vue from 'vue'
import Main from './notice.vue'
let NoticeConstructor = Vue.extend(Main)

const Notice = function (options) {
    if (Vue.prototype.$isServer) return
    options = options || {}
    if (typeof options === 'string') {
        options = {
            message: options,
            type: '',
        }
    }
    if (!options.message) return
    let noticeDOM = new NoticeConstructor({
        data: options,
    }).$mount()
    document.body.appendChild(noticeDOM.$el)
    noticeDOM.showNotice = true
    let timer = setTimeout(() => {
        noticeDOM.showNotice = false
        clearTimeout(timer)
    }, options.duration || 2000)
    let remove = setTimeout(() => {
        document.querySelector('.star-notice').remove()
        clearTimeout(remove)
    }, options.duration + 300 || 2300)
}

Vue.prototype.$notice = Notice
let arr = ['primary', 'success', 'error', 'warning']
arr.forEach((ele) => {
    Notice[ele] = (options) => {
        if (typeof options === 'string') {
            options = {
                message: options,
                type: ele,
            }
            return Notice(options)
        }
    }
})
export default Notice
