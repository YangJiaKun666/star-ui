<template>
    <div>
        <p class="com-p">单选模式</p>
        <div class="com-card">
            <star-calendar @change-date="select" @change-year="year" @change-mouth="mouth"></star-calendar>
        </div>
        <p class="com-p">多选模式</p>
        <div class="com-card">
            <star-calendar multiple @change-date="select" @change-year="year" @change-mouth="mouth"></star-calendar>
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