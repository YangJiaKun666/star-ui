<template>
    <div>
        <div class="com-p" :style="{ display: 'flex', alignItems: 'baseline' }">
            <h1>示例</h1>
            （点击元素即可复制名称）
        </div>
        <div class="com-card">
            <div class="box" v-for="(item, index) of data" :key="index">
                <div class="btn">
                    <star-button
                        type="primary"
                        @click="() => (item.value = !item.value)"
                        >click me</star-button
                    >
                </div>
                <star-transition :name="item.name">
                    <div v-if="item.value" class="div" @click="copy(item.name)">
                        {{ item.name }}
                    </div>
                </star-transition>
            </div>
        </div>
        <input type="text" class="input" ref="input" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { name: 'star-fade', value: true },
                { name: 'star-fade-scale', value: true },
                { name: 'star-stopandgo', value: true },
                { name: 'star-slibe-left', value: true },
                { name: 'star-slibe-right', value: true },
                { name: 'star-transform-y', value: true },
            ],
        }
    },
    methods: {
        copy(name) {
            let input = this.$refs.input
            input.value = name
            input.select()
            document.execCommand('Copy')
            this.$notice({
                message: '复制成功',
                type: 'success',
                target: '.phone > .body',
            })
        },
    },
}
</script>
<style lang="less" scoped>
.com-card {
    display: flex;
    flex-wrap: wrap;
    .all {
        width: 100% !important;
        margin: 0 !important;
        .flex {
            justify-content: space-around;
        }
    }
    .box,
    .all {
        height: 145px;
        width: 47%;
        margin-right: 3%;
        margin-bottom: 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .btn {
            height: 40px;
        }
        .div {
            background: skyblue;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            padding: 10px;
            box-sizing: border-box;
            cursor: pointer;
            word-break: break-all;
            color: #fff;
        }
    }
    .box:nth-child(2n) {
        margin: 0;
    }
}
.input {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: -999;
}
.flex {
    display: flex;
    flex-wrap: nowrap;
    .div {
        flex-shrink: 0;
    }
}
</style>
