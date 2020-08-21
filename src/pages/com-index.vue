<template>
    <div>
        <h2>vue移动端组件库</h2>
        <div class="com-list">
            <div
                class="com-box"
                v-for="item in menuData"
                :key="item.label"
                @click="goCom(item.path)"
            >
                <div :style="{ display: 'flex', alignItem: 'center' }">
                    <star-icon
                        name="info-circle"
                        color="#333"
                        :style="{ marginRight: '10px' }"
                    ></star-icon>
                    {{ item.label }}
                </div>
                <star-icon
                    name="angle-double-right"
                    size="20"
                    color="#999"
                ></star-icon>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menuData: [
                { label: 'transition内置过渡', path: '/home/transition' },
                { label: 'image图片', path: '/home/image' },
                { label: 'input输入框', path: '/home/input' },
                { label: 'checkbox复选框', path: '/home/checkbox' },
                { label: 'button按钮', path: '/home/button' },
                { label: 'icon图标', path: '/home/icon' },
                { label: 'navbar导航', path: '/home/navbar' },
                { label: 'tabbar分类栏', path: '/home/tabbar' },
                { label: 'notice消息提示', path: '/home/notice' },
                { label: 'popup弹出层', path: '/home/popup' },
                { label: 'actionSheet操作面板', path: '/home/action-sheet' },
            ],
        }
    },
    methods: {
        goCom(path) {
            if (this.$route.path == path) return
            this.$router.push(path)
        },
    },
}
</script>
<style scoped>
.com-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2 {
    padding: 0 20px;
}
.com-box {
    height: 40px;
    padding: 0 20px;
    background: #fff;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    cursor: pointer;
    width: 80%;
    border-radius: 100px;
}
</style>
