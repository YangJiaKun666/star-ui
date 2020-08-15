<template>
    <div id="app">
        <div class="index">
            <star-transition name="star-fade">
                <router-view></router-view>
            </star-transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {};
    },
};
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: fixed;
    overflow: auto;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .index {
        margin: auto;
        min-width: 1000px;
        max-width: 1600px;
        margin: auto;
        height: 100%;
    }
}
</style>
