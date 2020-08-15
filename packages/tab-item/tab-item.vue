<template>
    <star-transition :name="leftOrRight ? 'star-slibe-left' : 'star-slibe-right'">
        <div v-show="isSelected" class="tab__pane">
            <slot />
        </div>
    </star-transition>
</template>

<script>
export default {
    name: "starTabItem",
    props: {
        title: String,
    },
    data() {
        return {
            parent: null,
            leftOrRight: true,
        };
    },
    computed: {
        index() {
            return this.parent.tabs.indexOf(this);
        },
        isSelected() {
            return this.index === this.parent.curActive;
        },
    },
    methods: {
        findParent(name) {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.name === name) {
                    this.parent = parent;
                    break;
                }
                parent = parent.$parent; // 多层嵌套
            }
        },
    },
    watch: {
        "parent.curActive": {
            handler(newVal, oldVal) {
                if (newVal > oldVal) {
                    this.leftOrRight = true;
                    return;
                } else if (newVal < oldVal) {
                    this.leftOrRight = false;
                    return;
                } else {
                    this.name = "";
                    return;
                }
            },
            deep: true,
        },
    },
    created() {
        this.findParent("starTabs");
    },
    mounted() {
        const { tabs } = this.parent;
        const index = this.parent.$slots.default.indexOf(this.$vnode);
        tabs.splice(index === -1 ? tabs.length : index, 0, this);
    },
    beforeDestroy() {
        this.parent.tabs.splice(this.index, 1);
    },
};
</script>

<style>
.tab__pane {
    box-sizing: border-box;
    width: 100%;
    flex-shrink: 0;
}
</style>