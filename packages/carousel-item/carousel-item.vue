<template>
    <li
        :class="['star-carousel-item',active == index ? 'star-active-width' : 'star-default-width']"
        :style="parent.transitionType"
    >
        <slot />
    </li>
</template>
<script>
export default {
    name: "starCarouselItem",
    computed: {
        parent() {
            return this.$parent;
        },
        index() {
            return this.parent.$children.indexOf(this);
        },
        active() {
            return this.parent.active;
        },
    },
};
</script>
<style lang="less" scoped>
.star-carousel-item {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    box-sizing: border-box;
    overflow: hidden;
}
.star-active-width {
    width: 100%;
    right: 0;
    z-index: inherit;
}
.star-default-width {
    width: 0;
    left: 0;
    z-index: -1;
}
</style>