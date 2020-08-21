<template>
    <star-transition name="star-fade">
        <div v-show="showPopup" @click="onClose" :class="['star-popup', filter && 'star-filter']">
            <star-transition :name="`star-fade-${transitionName}`">
                <div
                    @click.stop
                    v-if="showPopup"
                    :class="[
                        'popup-box',
                        `star-${position}`,
                        padding && 'star-padding',
                    ]"
                    :style="size"
                >
                    <div class="star-popup-content">
                        <slot />
                    </div>
                </div>
            </star-transition>
        </div>
    </star-transition>
</template>
<script>
export default {
    name: "starPopup",
    model: {
        prop: "showPopup",
        event: "hide",
    },
    props: {
        showPopup: Boolean,
        filter: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: "center",
        },
        padding: {
            type: Boolean,
            default: false,
        },
        size: {
            type: Object,
            default: () => {
                return { width: "", height: "" };
            },
        },
    },
    computed: {
        transitionName() {
            if (this.position == "center") {
                return "fade";
            } else {
                return this.position;
            }
        },
    },
    methods: {
        onClose() {
            this.$emit("hide", false);
            this.$emit("close");
        },
    },
};
</script>
<style lang="less" scoped>
.star-popup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
    overflow: hidden;
}
.star-filter {
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.2);
}
.popup-box {
    position: absolute;
    box-sizing: border-box;
    .star-popup-content {
        height: 100%;
        width: 100%;
        background: #fff;
        border-radius: 10px;
    }
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
.star-padding {
    padding: 16px;
}
</style>
