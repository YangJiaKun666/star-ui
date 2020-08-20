<template>
    <transition :name="name" :mode="mode">
        <slot />
    </transition>
</template>
<script>
export default {
    name: 'starTransition',
    props: {
        name: String,
        mode: String,
    },
}
</script>
