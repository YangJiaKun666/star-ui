<template>
    <div class="star-image-box">
        <img :class="['star-image',fit && `star-${fit}`]" :src="src" />
    </div>
</template>
<script>
export default {
    name: "starImage",
    props: {
        src: String,
        fit: String,
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
}
</style>