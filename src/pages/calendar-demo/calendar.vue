<template>
    <div>
        <p class="com-p">使用示例</p>
        <div class="com-card">
            <star-calendar @select-date="select" @change-year="year" @change-mouth="mouth"></star-calendar>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        select(val) {
            console.log(val);
        },
        year(val) {
            console.log(val);
        },
        mouth(val) {
            console.log(val);
        },
    },
};
</script>