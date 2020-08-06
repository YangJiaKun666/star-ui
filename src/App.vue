<template>
    <div id="app">
        <star-input type="text" placeholder="请输入" v-model="text" clear>
            <template #icon>
                <star-icon name="venus-mars" size="20" color="#c06c84"></star-icon>
            </template>
        </star-input>
        <star-checkbox v-model="checkbox" @change="onChange" label="选中"></star-checkbox>
        <div style="height: 10px"></div>
        <star-button
            type="primary"
            icon="heart"
            size="mini"
            :loading="loaded"
            :disabled="loaded"
            @click="clickButton"
        >这是一段很长的话哈哈哈</star-button>
        <star-tabs v-model="active" @click="onChanges">
            <star-tab-item v-for="item in 20" :key="item" :title="`标题 ${item}`">内容 {{ item }}</star-tab-item>
        </star-tabs>
        <star-navbar v-model="action" @change="onChange3">
            <star-navbar-item
                v-for="(item,index) in tabs"
                :key="index"
                :iconName="action != index ? '' : item.icon"
                :hideText="action == index"
            >{{ item.title }}</star-navbar-item>
        </star-navbar>
        <star-carousel>
            <star-carousel-item v-for="(item,index) of imgs" :key="index">
                <img :src="item" fit="fill" alt />
            </star-carousel-item>
        </star-carousel>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            text: "",
            loaded: false,
            checkbox: true,
            active: 2,
            action: 0,
            tabs: [
                {
                    icon: "venus-mars",
                    title: "双性",
                },
                {
                    icon: "venus",
                    title: "女性",
                },
                {
                    icon: "mars",
                    title: "男性",
                },
                {
                    icon: "heart-o",
                    title: "heart",
                },
            ],
            imgs: [
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2626209138,2760863424&fm=26&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3180559933,1841450308&fm=26&gp=0.jpg",
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1705581946,4177791147&fm=26&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1478760991,1557374370&fm=26&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1770164706,1757134422&fm=26&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1456128944,481770015&fm=26&gp=0.jpg",
            ],
        };
    },
    methods: {
        clickButton() {
            console.log(this.text, this.checkbox);
            this.loaded = true;
            setTimeout(() => {
                this.loaded = false;
            }, 1000);
        },
        onChange(val) {
            console.log(val);
        },
        onChanges(val) {
            console.log(val);
        },
        onChange3(val) {
            console.log(val, this.action);
            this.action = val;
        },
    },
};
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
img {
    width: 100%;
    height: 100%;
}
</style>
