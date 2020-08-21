<template>
    <div id="app">
        <div class="phone">
            <div class="header">
                <star-icon
                    class="back-btn"
                    v-if="$route.meta.name != 'star-ui'"
                    @click="$router.go(-1)"
                    name="angle-left"
                    size="22"
                    color="#999"
                />
                {{ $route.meta.name }}
            </div>
            <div class="body scoll-bar">
                <star-transition name="star-fade" mode="out-in">
                    <router-view></router-view>
                </star-transition>
            </div>
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
    .phone {
        background: #f2f2f2;
        width: 100%;
        height: 100%;
        box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        overflow: hidden;
        .header {
            height: 50px;
            text-align: center;
            line-height: 50px;
            background: #fff;
            font-size: 16px;
            font-weight: bold;
            color: #333;
            position: relative;
        }
        .body {
            height: calc(100% - 50px);
            overflow: auto;
            width: 100%;
        }
    }

    .back-btn {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        cursor: pointer;
    }
    .scoll-bar::-webkit-scrollbar {
        width: 0px;
    }
}
</style>
