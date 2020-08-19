<template>
    <div class="tabs">
        <div ref="tabNav" class="tabs__nav" :style="{ background }">
            <div
                v-for="(tab, index) in tabs"
                :key="index"
                ref="tabs"
                @click="onClick(index)"
                class="tab"
                :class="{ 'tab--active': index == curActive }"
            >
                <div
                    :class="
                        index == curActive ? 'star-active-color' : 'star-color'
                    "
                >
                    {{ tab.title }}
                </div>
                <transition name="star-fade">
                    <div
                        v-if="index == curActive"
                        class="tab__line star-background"
                    ></div>
                </transition>
            </div>
        </div>
        <div class="star-flex star-hide">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'starTabs',
    model: {
        prop: 'active',
    },
    props: {
        active: {
            type: [Number, String],
            default: 0,
        },
        background: String,
    },
    data() {
        return {
            tabs: [],
            curActive: null,
        }
    },
    watch: {
        active(val) {
            if (val !== this.curActive) {
                this.correctActive(val)
            }
        },
        tabs() {
            this.correctActive(this.curActive || this.active)
        },
        curActive(newVal, oldVal) {
            this.$nextTick(() => {
                let tabNav = this.$refs.tabNav
                let childs = tabNav.children
                if (
                    childs[newVal].offsetLeft + childs[newVal].offsetWidth >
                        tabNav.offsetWidth ||
                    tabNav.scrollLeft != 0
                ) {
                    if (newVal > oldVal) {
                        tabNav.scrollLeft =
                            tabNav.scrollLeft +
                            (childs[newVal].offsetWidth +
                                childs[oldVal].offsetWidth)
                    } else if (newVal < oldVal) {
                        tabNav.scrollLeft =
                            tabNav.scrollLeft -
                            (childs[newVal].offsetWidth +
                                childs[oldVal].offsetWidth)
                    }
                }
            })
        },
    },
    mounted() {
        this.correctActive(this.active)
    },
    methods: {
        onClick(index) {
            const { title } = this.tabs[index]
            this.setCurActive(index)
            this.$emit('click', { index, title })
        },
        correctActive(active) {
            active = +active
            const exist = this.tabs.some((tab) => tab.index === active)
            const defaultActive = (this.tabs[0] || {}).index || 0
            this.setCurActive(exist ? active : defaultActive)
        },
        setCurActive(active) {
            if (active !== this.curActive) {
                if (this.curActive !== null) {
                    this.$emit('change', {
                        active,
                        title: this.tabs[active].title,
                    })
                }
                this.curActive = active
            }
        },
    },
}
</script>
<style lang="less" scoped>
.tab {
    position: relative;
    margin-right: 25px;
    text-align: center;
    box-sizing: border-box;
    line-height: 40px;
    transition: all 0.1s linear;
    flex-shrink: 0;
    font-weight: 500;
    &--active {
        transform: scale(1.2);
        font-weight: bold;
    }
    &__line {
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 6px;
        border-radius: 4px;
    }
}
.tabs {
    position: relative;
    width: 100%;
    &__nav {
        display: flex;
        user-select: none;
        position: relative;
        padding: 0 12px;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        box-sizing: border-box;
        align-items: flex-start;
        scrollbar-width: none; // 火狐
        -ms-overflow-style: none; // IE10+
    }
    // 谷歌、Safari
    &__nav::-webkit-scrollbar {
        display: none;
    }
    .star-hide {
        overflow: hidden;
    }
}
</style>
