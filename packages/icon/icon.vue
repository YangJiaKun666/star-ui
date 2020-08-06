<template>
    <div class="star-icon" @click="$emit('click')">
        <i
            ref="i"
            :class="['fa',`fa-${name}`]"
            :style="{ color,fontSize: size + 'px' }"
            aria-hidden="true"
        ></i>
    </div>
</template>
<script>
export default {
    name: "starIcon",
    props: {
        name: {
            type: String,
            default: "",
        },
        size: {
            type: [Number, String],
            default: 16,
        },
        color: {
            type: String,
            default: "",
        },
    },
};
</script>
<style lang="less" scoped>
.star-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>