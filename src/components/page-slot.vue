<template>
    <div>
        <h1>{{ title }}</h1>
        <h3>{{ subTitle }}</h3>
        <slot />
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        subTitle: String,
    },
};
</script>