<template>
    <div>
        <p class="com-p">基础用法</p>
        <div class="com-card" :style="{ display: 'flex',justifyContent: 'space-around' }">
            <star-checkbox label="选项1" v-model="value1" />
            <star-checkbox label="选项2" v-model="value2" />
            <star-checkbox label="选项3" v-model="value3" />
        </div>
        <p class="com-p">设置大小</p>
        <div class="com-card" :style="{ display: 'flex',justifyContent: 'space-around' }">
            <star-checkbox label="mini" size="mini" />
            <star-checkbox label="small" size="small" />
            <star-checkbox label="langer" size="langer" />
        </div>
        <p class="com-p">圆形复选框</p>
        <div class="com-card">
            <star-checkbox label="圆形复选框" round />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1: false,
            value2: true,
            value3: false,
        };
    },
};
</script>