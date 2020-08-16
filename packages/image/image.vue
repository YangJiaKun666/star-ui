<template>
    <div class="star-image-box">
        <img
            v-if="!error && src"
            :class="['star-image',fit && `star-${fit}`]"
            :src="src"
            @load="imageLoad"
            @error="imageError"
        />
        <div class="star-image-error" v-if="error">
            <slot name="error">
                <span>加载失败</span>
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "starImage",
    props: {
        src: String,
        fit: String,
    },
    data() {
        return {
            error: false,
        };
    },
    methods: {
        imageError() {
            this.error = true;
            this.$emit("imageError");
        },
        imageLoad() {
            this.$emit("imageLoad");
        },
    },
};
</script>
<style lang="less" scoped>
.star-image-box {
    width: 130px;
    height: 100px;
    overflow: hidden;
    .star-image {
        height: 100%;
        width: 100%;
    }
    .star-cover {
        object-fit: cover;
    }
    .star-contain {
        object-fit: contain;
    }
    .star-fill {
        object-fit: fill;
    }
    .star-scale-down {
        object-fit: scale-down;
    }
    .star-none {
        object-fit: none;
    }
    .star-image-error {
        width: 100%;
        height: 100%;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 12px;
        box-sizing: border-box;
        span {
            color: #cdcdcd;
            font-size: 14px;
        }
    }
}
</style>