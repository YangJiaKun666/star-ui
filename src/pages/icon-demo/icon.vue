<template>
    <div>
        <div class="icon-list">
            <div class="icon-box" v-for="item in iconList" :key="item" @click="copyName(item)">
                <star-icon :name="item" size="20"></star-icon>
                <span>{{ item }}</span>
            </div>
        </div>
        <p>
            可访问
            <a
                href="http://www.fontawesome.com.cn/faicons/"
                target="_blank"
            >http://www.fontawesome.com.cn/faicons/</a>
            查看更多图标
        </p>
        <input type="text" ref="input" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            iconList: [
                "address-book",
                "address-book-o",
                "address-card",
                "database",
                "envelope",
                "envelope-o",
                "envelope-open",
                "envelope-open-o",
                "user-o",
                "user-circle",
                "user",
                "heart",
                "heart-o",
                "heartbeat",
                "info-circle",
                "info",
                "battery-full",
                "battery-half",
                "battery-empty",
                "bus",
                "car",
                "circle-o-notch",
                "cloud",
                "cloud-upload",
                "cloud-download",
                "check-circle",
                "check",
                "clone",
                "times",
                "diamond",
                "comment-o",
                "comment",
                "comments",
                "eye",
                "eye-slash",
                "search",
                "search-minus",
                "search-plus",
                "star",
                "star-o",
                "tags",
                "sticky-note",
                "sticky-note-o",
                "subway",
                "venus-mars",
                "venus",
                "mars",
                "file",
                "file-o",
                "spinner",
                "cog",
                "check-square",
                "file-text",
                "rotate-right",
                "rotate-left",
                "angle-double-left",
                "angle-double-right",
                "angle-double-up",
                "angle-double-down",
                "angle-left",
                "angle-right",
                "angle-up",
                "angle-down",
                "music",
                "youtube-play",
            ],
        };
    },
    methods: {
        copyName(name) {
            const input = this.$refs.input;
            input.value = name;
            input.select();
            document.execCommand("Copy");
            alert("复制成功");
        },
    },
};
</script>
<style scoped>
p {
    white-space: pre-wrap;
    padding: 0 10px;
}
a {
    text-decoration: none;
    color: #02aab0;
}
input {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: 999;
}
.icon-list {
    display: flex;
    flex-wrap: wrap;
}
.icon-box {
    width: calc(100% / 4);
    background: #fff;
    padding: 12px 10px;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #eaeaea;
    cursor: pointer;
}
.icon-box span {
    color: #333;
    font-size: 12px;
    margin-top: 10px;
    display: block;
}
</style>