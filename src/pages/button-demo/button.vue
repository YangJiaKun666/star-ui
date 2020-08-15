<template>
    <div>
        <p class="com-p">基本用法</p>
        <div class="com-card">
            <star-button>基本用法</star-button>
        </div>
        <p class="com-p">按钮颜色</p>
        <div class="com-card">
            <star-button type="primary">primary主要按钮</star-button>
            <star-button type="success">success成功按钮</star-button>
            <star-button type="error">error错误按钮</star-button>
            <star-button type="warning">warning警告按钮</star-button>
        </div>
        <p class="com-p">按钮大小</p>
        <div class="com-card">
            <star-button type="primary" size="mini">mini</star-button>
            <star-button type="primary" size="small">small</star-button>
            <star-button type="primary" size="langer">langer</star-button>
        </div>
        <p class="com-p">椭圆按钮，显示图标，显示loading的按钮，按钮禁用</p>
        <div class="com-card">
            <star-button type="primary" round>椭圆按钮</star-button>
            <star-button type="primary" icon="heart">显示图标</star-button>
            <star-button type="primary" loading>loading</star-button>
            <star-button type="primary" disabled>按钮禁用</star-button>
        </div>
        <p class="com-p">完整示例</p>
        <div class="com-card">
            <star-button
                @click="onClick"
                type="primary"
                :loading="loading"
                :disabled="loading"
                icon="heartbeat"
                size="small"
            >{{ !loading ? '点我试试~' : '稍等哈，我正在努力加载中~' }}</star-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        onClick() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
    },
};
</script>