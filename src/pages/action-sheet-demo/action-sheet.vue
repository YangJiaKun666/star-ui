<template>
    <div>
        <p class="com-p">基本用法</p>
        <div class="com-card">
            <star-button
                @click="()=>{show = true;filter=true;padding=true;showCloseButton=true}"
            >打开面板</star-button>
        </div>
        <p class="com-p">关闭背景模糊</p>
        <div class="com-card">
            <star-button
                @click="()=>{show = true;filter=false;padding=true;showCloseButton=true}"
            >关闭背景模糊</star-button>
        </div>
        <p class="com-p">元素宽度铺满窗口</p>
        <div class="com-card">
            <star-button
                @click="()=>{show = true;filter=true;padding=false;showCloseButton=true}"
            >铺满窗口</star-button>
        </div>
        <p class="com-p">隐藏取消按钮</p>
        <div class="com-card">
            <star-button
                @click="()=>{show = true;filter=true;padding=true;showCloseButton=false}"
            >隐藏取消按钮</star-button>
        </div>
        <star-action-sheet
            v-model="show"
            :options="arr"
            :filter="filter"
            :padding="padding"
            :showCloseButton="showCloseButton"
            @change="change"
        ></star-action-sheet>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            filter: true,
            padding: true,
            showCloseButton: true,
            arr: [
                { label: "选项1", value: "1" },
                { label: "选项2", value: "2" },
                { label: "选项3", value: "3" },
            ],
        };
    },
    methods: {
        change(val) {
            this.$notice.primary(
                `选中了第${val.index + 1}项，label为：${val.label}，value为：${
                    val.value
                }`
            );
        },
    },
};
</script>
