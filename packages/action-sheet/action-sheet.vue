<template>
    <star-popup
        v-model="show"
        :size="{ width: '100%', height: '30%' }"
        padding
        filter
        position="bottom"
    >
        <div class="star-action__title">
            <slot name="header" />
        </div>
    </star-popup>
</template>

<script>
export default {
    name: 'starActionSheet',
    data() {
        return {
            show: true,
        }
    },
}
</script>
<style lang="less" scoped>
.star-action {
    &__title {
        padding: 10px;
    }
}
</style>
