<template>
    <div>
        <p class="com-p">基本用法</p>
        <div class="com-card">
            <star-input placeholder="基本用法" type="text" v-model="value"></star-input>
        </div>
        <p class="com-p">自定义类型</p>
        <div class="com-card">
            <star-input placeholder="文本输入框" type="text" v-model="text"></star-input>
            <star-input placeholder="手机号输入框" type="tel" v-model="tel"></star-input>
            <star-input placeholder="数字输入框" type="number" v-model="number"></star-input>
            <star-input placeholder="密码输入框" type="password" v-model="password"></star-input>
        </div>
        <p class="com-p">可限制输入长度</p>
        <div class="com-card">
            <star-input placeholder="最多输入十个字符" maxlength="10" type="text" v-model="max"></star-input>
        </div>
        <p class="com-p">清除输入框内容内容</p>
        <div class="com-card">
            <star-input placeholder="带清除按钮" type="text" clear v-model="clr"></star-input>
        </div>
        <p class="com-p">输入框的禁用和只读</p>
        <div class="com-card">
            <star-input placeholder="输入框禁用" type="text" disabled></star-input>
            <star-input placeholder="输入框只读" type="text" readonly></star-input>
        </div>
        <p class="com-p">显示图标</p>
        <div class="com-card">
            <star-input placeholder="显示图标" type="text" v-model="icon">
                <template #icon>
                    <star-icon name="ravelry"></star-icon>
                </template>
            </star-input>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: "",
            text: "",
            tel: "",
            number: "",
            password: "",
            max: "",
            clr: "",
            icon: "",
        };
    },
};
</script>