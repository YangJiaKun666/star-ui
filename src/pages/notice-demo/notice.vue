<template>
    <div id="notice">
        <p class="com-p">基本用法</p>
        <div class="com-card">
            <star-button @click="showNotice('', '基本用法')"
                >基本用法</star-button
            >
        </div>
        <p class="com-p">不同类型的消息提示</p>
        <div class="com-card">
            <star-button
                type="primary"
                @click="showNotice('primary', '主要提示')"
                >主要提示</star-button
            >
            <star-button
                type="success"
                @click="showNotice('success', '成功提示')"
                >成功提示</star-button
            >
            <star-button type="error" @click="showNotice('error', '错误提示')"
                >错误提示</star-button
            >
            <star-button
                type="warning"
                @click="showNotice('warning', '警告提示')"
                >警告提示</star-button
            >
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        showNotice(type, text) {
            this.$notice({
                message: text,
                type,
                target: '#notice',
            })
        },
    },
}
</script>
