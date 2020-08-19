<template>
    <div>
        <p class="com-p">基本用法</p>
        <div class="com-card">
            <star-tabs v-model="current">
                <star-tab-item title="tab1">tab1-内容</star-tab-item>
                <star-tab-item title="tab2">tab2-内容</star-tab-item>
                <star-tab-item title="tab3">tab3-内容</star-tab-item>
            </star-tabs>
        </div>
        <p class="com-p">设置背景颜色</p>
        <div class="com-card">
            <star-tabs v-model="current" background="pink">
                <star-tab-item title="tab1">tab1-内容</star-tab-item>
                <star-tab-item title="tab2">tab2-内容</star-tab-item>
                <star-tab-item title="tab3">tab3-内容</star-tab-item>
            </star-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 0,
        }
    },
}
</script>

<style lang="less" scoped></style>
