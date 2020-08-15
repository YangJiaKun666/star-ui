<template>
    <transition :name="name">
        <slot />
    </transition>
</template>
<script>
export default {
    name: "starTransition",
    props: {
        name: String,
    },
};
</script>