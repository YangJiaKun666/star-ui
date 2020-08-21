<template>
    <div>
        <p class="com-p">使用方法</p>
        <div class="com-card">
            <star-button type="primary" @click="showPopupDefault"
                >打开弹窗</star-button
            >
            <star-button type="primary" @click="showPopupFilter"
                >开启模糊背景</star-button
            >
            <star-button type="primary" @click="showPopupPosition('center')"
                >居中弹出</star-button
            >
            <star-button type="primary" @click="showPopupPosition('top')"
                >顶部弹出</star-button
            >
            <star-button type="primary" @click="showPopupPosition('bottom')"
                >底部弹出</star-button
            >
            <star-button type="primary" @click="showPopupPosition('left')"
                >左侧弹出</star-button
            >
            <star-button type="primary" @click="showPopupPosition('right')"
                >右侧弹出</star-button
            >
        </div>
        <star-popup v-model="showPopup1" :filter="filter"></star-popup>
        <star-popup
            :size="{ width: '100%', height: '60%' }"
            v-model="showPopup2"
            :position="position"
        >
            <div class="box">自定义内容</div>
        </star-popup>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showPopup1: false,
            showPopup2: false,
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
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
