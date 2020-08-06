<template>
    <div
        @click="toggleTab"
        :style="getTabWidth"
        :class="['star-navbar-item','star-block-click', nativeActive == index ? 'star-active-color' : 'star-color']"
    >
        <transition name="star-stopandgo">
            <slot name="icon">
                <star-icon v-if="iconName" :name="iconName" size="24"></star-icon>
            </slot>
        </transition>
        <transition name="star-stopandgo">
            <span v-if="!hideText">
                <slot></slot>
            </span>
        </transition>
    </div>
</template>
<script>
export default {
    name: "starNavbarItem",
    props: {
        name: [String, Number],
        replace: {
            type: Boolean,
            default: false,
        },
        iconName: String,
        hideText: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            parent: null,
            nativeActive: null,
            index: null,
        };
    },
    mounted() {
        this.findParent("starNavbar"); // 找到对应的父元素
        this.$nextTick(() => {
            // 将父组件的curActive复制到子组件
            this.nativeActive = this.parent.curActive;
            // 是否开启路由，开启后index将等于当前路由
            if (this.parent.route) {
                this.index = this.$route.path;
                return;
            }
            if (!this.name) {
                // 这里是获取该元素的位置：index
                this.index = this.parent.navbars.indexOf(this);
            } else {
                this.index = this.name;
            }
        });
    },
    computed: {
        // 父组件的curActive,方便监听
        parentActive() {
            let val = "";
            val =
                this.parent != null ? this.parent.curActive : this.nativeActive;
            return val;
        },
        getTabWidth() {
            if (this.parent != null) {
                let W = 100 / this.parent.navbars.length;
                return `width: ${W}%`;
            }
        },
    },
    watch: {
        nativeActive(val) {
            this.parent.curActive = val;
        },
        parentActive(val) {
            this.nativeActive = val;
        },
    },
    methods: {
        findParent(name) {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.name == name) {
                    this.parent = parent;
                    break;
                }
                parent = parent.$parent;
            }
        },
        toggleTab() {
            if (this.parent.route) {
                if (this.replace) {
                    this.$route.replace(this.name);
                } else {
                    this.$route.push(this.name);
                }
                return;
            }
            if (!this.name) {
                this.nativeActive = this.parent.navbars.indexOf(this);
            } else {
                this.nativeActive = this.name;
            }
        },
    },
};
</script>
<style lang="less" scoped>
.star-navbar-item {
    height: 100%;
    padding: 4px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
</style>