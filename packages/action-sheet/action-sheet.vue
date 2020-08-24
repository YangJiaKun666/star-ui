<template>
    <star-popup
        v-model="$attrs.value"
        :size="{ width: '100%' }"
        @close="clickPopup"
        :padding="padding"
        :filter="filter"
        position="bottom"
    >
        <div
            class="star-action__box star-block-click"
            v-for="(item , index) of options"
            :key="index"
            @click="onChange(item, index)"
        >{{ item.label }}</div>
        <div class="star-hr" v-if="options.length > 0 && showCloseButton"></div>
        <div
            v-if="showCloseButton"
            class="star-action__box star-block-click star-action__close"
            @click="onClose"
        >取消</div>
    </star-popup>
</template>

<script>
export default {
    name: "starActionSheet",
    model: {
        event: "hide",
    },
    props: {
        filter: {
            type: Boolean,
            default: true,
        },
        padding: {
            type: Boolean,
            default: true,
        },
        options: {
            type: Array,
            default: () => {
                return [];
            },
        },
        showCloseButton: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onChange(item, index) {
            this.$emit("change", { ...item, index });
            this.onHide();
        },
        clickPopup() {
            this.$emit("click-mask");
            this.onHide();
        },
        onClose() {
            this.$emit("close");
            this.onHide();
        },
        onHide() {
            this.$emit("hide", false);
        },
    },
};
</script>
<style lang="less" scoped>
.star-action {
    &__box {
        text-align: center;
        line-height: 46px;
        font-size: 14px;
        overflow: hidden;
        border-top: 1px solid #eaeaea;
        padding: 0 16px;
    }
    &__box:first-child,
    &__close {
        border: 0;
    }
}

.star-hr {
    height: 6px;
    width: 96%;
    margin: 0 auto;
    background: #f2f2f2;
    border-radius: 5px;
}
</style>
