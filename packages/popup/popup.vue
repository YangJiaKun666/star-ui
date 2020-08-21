<template>
    <star-transition name="star-fade">
        <div
            v-show="$attrs.value"
            @click="onClose"
            :class="['star-popup', filter && 'star-filter']"
        >
            <star-transition :name="`star-fade-${transitionName}`">
                <div
                    @click.stop
                    v-if="$attrs.value"
                    :class="['popup-box', `star-${position}`]"
                >
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
    },
    watch: {
        position(val) {
            console.log(val)
        },
    },
    computed: {
        transitionName() {
            if (this.position == 'center') {
                return 'fade'
            } else {
                return this.position
            }
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
    background: rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
}
.star-filter {
    backdrop-filter: blur(8px);
    background: rgba(225, 225, 225, 0.2);
}
.popup-box {
    position: absolute;
    width: 100%;
}
.star-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.star-top {
    top: 0;
    left: 0;
}
.star-bottom {
    bottom: 0;
    left: 0;
}
.star-left {
    top: 0;
    left: 0;
}
.star-right {
    top: 0;
    right: 0;
}
.star-center {
    align-items: center;
}
</style>
