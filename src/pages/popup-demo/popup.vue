<template>
    <div style="position:relative;height: 100%">
        <p class="com-p">使用方法</p>
        <div class="com-card">
            <star-button type="primary" @click="showPopupDefault"
                >打开弹窗</star-button
            >
            <star-button type="primary" @click="showPopupFilter"
                >开启模糊背景</star-button
            >
            <star-button type="primary" @click="showPopupPosition('center')"
                >内容居中</star-button
            >
            <star-button type="primary" @click="showPopupPosition('top')"
                >内容置顶</star-button
            >
            <star-button type="primary" @click="showPopupPosition('bottom')"
                >内容置底</star-button
            >
            <star-button type="primary" @click="showPopupPadding"
                >添加内边距</star-button
            >
        </div>
        <star-popup v-model="showPopup1" :filter="filter"></star-popup>
        <star-popup v-model="showPopup2" :position="position">
            <div class="box">自定义内容</div>
        </star-popup>
        <star-popup v-model="showPopup3" :padding="true">
            <div class="box" :style="{ borderRadius: '10px' }">自定义内容</div>
        </star-popup>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showPopup1: false,
            showPopup2: false,
            showPopup3: false,
            filter: false,
            position: 'center',
        }
    },
    methods: {
        showPopupDefault() {
            this.showPopup1 = true
            this.filter = false
        },
        showPopupFilter() {
            this.showPopup1 = true
            this.filter = true
        },
        showPopupPosition(position) {
            this.showPopup2 = true
            this.position = position
        },
        showPopupPadding() {
            this.showPopup3 = true
        },
    },
}
</script>
<style lang="less" scoped>
.com-card {
    padding: 10px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.box {
    height: 300px;
    width: 100%;
    background: #fff;
    text-align: center;
    line-height: 300px;
}
</style>
