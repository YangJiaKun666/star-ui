<template>
    <div>
        <h1>{{ title }}</h1>
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