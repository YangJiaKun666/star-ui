<template>
    <div :class="['star-flex', 'star-navbar', fixed && 'star-fixed']">
        <slot />
    </div>
</template>
<script>
export default {
    name: "starNavbar",
    model: {
        prop: "active",
    },
    watch: {
        active(val) {
            if (this.curActive == val) return;
            this.curActive = this.val;
        },
        curActive(val) {
            this.$attrs.active = val;
            this.$emit("change", val);
        },
    },
    props: {
        active: {
            type: [Number, String],
            default: () => {
                return 0;
            },
        },
        fixed: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            navbars: this.$children,
            curActive: this.active,
        };
    },
};
</script>
<style lang="less" scoped>
.star-navbar {
    height: 50px;
    width: 100%;
    border-radius: 2px;
    justify-content: space-between;
    box-sizing: border-box;
}
.star-fixed {
    position: fixed;
    left: 0;
    top: 0;
}
</style>