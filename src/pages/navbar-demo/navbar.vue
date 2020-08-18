<template>
    <div>
        <p class="com-p">基本用法</p>
        <div class="com-card">
            <star-navbar v-model="defaultActive">
                <star-navbar-item>首页</star-navbar-item>
                <star-navbar-item>购物车</star-navbar-item>
                <star-navbar-item>分类</star-navbar-item>
                <star-navbar-item>我的</star-navbar-item>
            </star-navbar>
        </div>
        <p class="com-p">通过名字匹配</p>
        <div class="com-card">
            <star-navbar v-model="nameActive">
                <star-navbar-item name="index">首页</star-navbar-item>
                <star-navbar-item name="cart">购物车</star-navbar-item>
                <star-navbar-item name="screen">分类</star-navbar-item>
                <star-navbar-item name="myed">我的</star-navbar-item>
            </star-navbar>
        </div>
        <p class="com-p">展示图标</p>
        <div class="com-card">
            <star-navbar v-model="defaultActive">
                <star-navbar-item iconName="envelope-o">消息</star-navbar-item>
                <star-navbar-item iconName="heart-o">我喜欢的</star-navbar-item>
                <star-navbar-item iconName="diamond">分类</star-navbar-item>
                <star-navbar-item iconName="user-o">我的</star-navbar-item>
            </star-navbar>
        </div>
        <p class="com-p">未选中是展示文字，选中时展示图标</p>
        <div class="com-card">
            <star-navbar
                v-model="defaultActive"
                @change="(val) => (showIcon = val)"
            >
                <star-navbar-item
                    v-for="(navbar, index) in navbars"
                    :key="index"
                    :iconName="showIcon == index ? navbar.icon : ''"
                    :hideText="showIcon == index"
                    >{{ navbar.label }}</star-navbar-item
                >
            </star-navbar>
        </div>
        <p class="com-p">自定义图标</p>
        <div class="com-card">
            <star-navbar v-model="defaultActive">
                <star-navbar-item>
                    <template #icon>
                        <star-icon name="heartbeat" size="18"></star-icon>
                    </template>
                    自定义图标
                </star-navbar-item>
            </star-navbar>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            defaultActive: 0,
            nameActive: 'index',
            iconActive: 0,
            showIcon: 0,
            navbars: [
                { label: '消息', icon: 'envelope-o' },
                { label: '我喜欢的', icon: 'heart-o' },
                { label: '分类', icon: 'diamond' },
                { label: '我的', icon: 'user-o' },
            ],
        }
    },
}
</script>
<style scoped>
.com-card {
    padding-top: 0;
    padding-bottom: 0;
}
</style>
