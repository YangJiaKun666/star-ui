<template>
    <star-transition name="star-transform-y">
        <div class="star-notice" v-show="showNotice">
            <div class="star-notice__box" :class="getBackground">{{ message }}</div>
        </div>
    </star-transition>
</template>
<script>
export default {
    name: "starNotice",
    data() {
        return {
            showNotice: false,
            message: "",
            type: "",
        };
    },
    computed: {
        getBackground() {
            if (this.type) {
                return `star-${this.type}`;
            } else {
                return "star-info";
            }
        },
    },
};
</script>
<style lang="less" scoped>
.star-notice {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    z-index: 999;
    &__box {
        border-radius: 6px;
        padding: 10px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
    }
    .star-info {
        background: #fff;
        counter-reset: #333;
    }
}
</style>
