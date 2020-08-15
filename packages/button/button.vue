<template>
    <div
        :class="[
        'star-button-box',
        size && `star-size-${size}`,
        round && 'star-round',
        disabled && 'star-disbaled'
        ]"
    >
        <button
            :class="[
                'star-button', 
                'star-flex',
                'star-block-click', 
                type && `star-${type}`,
                round && 'star-round',
            ]"
            @click="onClick"
        >
            <star-icon
                v-if="loading"
                :style="{ marginRight: '10px' }"
                class="star-loading"
                name="circle-o-notch"
                size="14"
            ></star-icon>
            <star-icon
                v-else
                :style="{ marginRight: '10px' }"
                class="star-loading"
                :name="icon"
                size="14"
            ></star-icon>
            <span>
                <slot />
            </span>
        </button>
    </div>
</template>
<script>
/**
 * 当传入loading时，icon会失效
 */
export default {
    name: "starButton",
    props: {
        type: String,
        size: String,
        icon: String,
        round: Boolean,
        disabled: Boolean,
        loading: Boolean,
    },
    methods: {
        onClick() {
            this.$emit("click");
        },
    },
};
</script>
<style lang="less" scoped>
.star-button-box:last-child {
    margin-bottom: 0;
}
.star-button-box {
    height: 40px;
    min-width: 120px;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
    .star-button {
        padding: 0 12px;
        height: 100%;
        border-radius: 5px;
        width: 100%;
        justify-content: center;
        align-items: center;
        border: 2px solid #999;
    }
}
.star-size-mini {
    height: 35px;
    min-width: 100px;
}
.star-size-langer {
    height: 45px;
    min-width: 140px;
}
.star-round {
    border-radius: 666px !important;
}
.star-disbaled {
    position: relative;
}
.star-disbaled::after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(225, 225, 225, 0.5);
}
</style>