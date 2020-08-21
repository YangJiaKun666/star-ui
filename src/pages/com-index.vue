<template>
    <div>
        <div class="com-box" v-for="item in menuData" :key="item.label" @click="goCom(item.path)">
            <div :style="{ display: 'flex', alignItem: 'center' }">
                <star-icon name="info-circle" color="#333" :style="{ marginRight: '10px' }"></star-icon>
                {{ item.label }}
            </div>
            <star-icon name="angle-double-right" size="20" color="#999"></star-icon>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menuData: [
                { label: "transition内置过渡", path: "/home/transition" },
                { label: "image图片", path: "/home/image" },
                { label: "input输入框", path: "/home/input" },
                { label: "checkbox复选框", path: "/home/checkbox" },
                { label: "button按钮", path: "/home/button" },
                { label: "icon图标", path: "/home/icon" },
                { label: "navbar导航", path: "/home/navbar" },
                { label: "tabbar分类栏", path: "/home/tabbar" },
                { label: "notice消息提示", path: "/home/notice" },
                { label: "popup弹出层", path: "/home/popup" },
            ],
        };
    },
    methods: {
        goCom(path) {
            if (this.$route.path == path) return;
            this.$router.push(path);
        },
    },
};
</script>
<style scoped>
.com-box {
    height: 40px;
    padding: 0 20px;
    background: #fff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    cursor: pointer;
}
.com-box:first-child {
    margin-top: 10px;
}
</style>
