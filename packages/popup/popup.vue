<template>
    <star-transition name="star-fade">
        <div
            v-show="$attrs.value"
            @click="onClose"
            :class="[
                'star-popup',
                `star-${position}`,
                filter && 'star-filter',
                padding && 'star-padding',
            ]"
        >
            <star-transition name="star-transform-y">
                <div @click.stop v-if="$attrs.value" :style="{ width: '100%' }">
                    <slot />
                </div>
            </star-transition>
        </div>
    </star-transition>
</template>
<script>
export default {
    name: 'starPopup',
    model: {
        event: 'close',
    },
    props: {
        filter: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: 'center',
        },
        padding: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onClose() {
            this.$attrs.value = false
            this.$emit('close')
        },
    },
}
</script>
<style lang="less" scoped>
.star-popup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
}
.star-padding {
    padding: 20px;
}
.star-filter {
    backdrop-filter: blur(8px);
    background: rgba(225, 225, 225, 0.2);
}
.star-top {
    align-items: flex-start;
}
.star-bottom {
    align-items: flex-end;
}
.star-center {
    align-items: center;
}
</style>
