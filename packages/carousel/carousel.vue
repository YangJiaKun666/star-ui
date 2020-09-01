<template>
    <div class="star-carousel">
        <div
            class="star-carousel__box"
            ref="carouselBox"
            @touchstart="handlerStart"
            @touchmove="handlerMove"
            @touchend="handlerEnd"
        >
            <slot />
        </div>
        <div class="star-carousel__instructions">
            <div
                :class="[
                    'star-carousel__instructions__box',
                    currentActive == index + 1 && 'star-background',
                ]"
                v-for="(item, index) of childCount"
                :key="index"
            ></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'starCarousel',
    props: {
        duration: {
            type: [String, Number],
            default: 3000,
        },
        autoPlay: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            childCount: 0,
            carouselBox: null,
            timeName: null,
            currentActive: 1,
            start: 0,
            move: 0,
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.carouselBox = this.$refs.carouselBox
            this.childCount = this.$children.length
            if (this.autoPlay) {
                this.setIntervalFun()
            }
        })
    },
    methods: {
        // 手指触碰时
        handlerStart(event) {
            clearInterval(this.timeName)
            this.start = event.touches[0].clientX
        },
        // 手指移动时
        handlerMove(event) {
            let move = event.touches[0].clientX
            this.move = this.start - move
            this.setTransfromFun(this.move, false)
        },
        // 手指触碰结束
        handlerEnd() {
            if (this.move > 100) {
                this.currentActive++
            } else if (this.move < -100) {
                this.currentActive--
            }
            this.setAction()
            this.setTransfromFun(0, true)
            this.setIntervalFun()
        },
        // 设置定滚动间隔
        setIntervalFun() {
            this.timeName = setInterval(() => {
                this.currentActive++
                this.setAction()
                this.setTransfromFun('', true)
            }, this.duration)
        },
        // 设置下标
        setAction() {
            if (this.currentActive > this.childCount) {
                this.currentActive = 1
            } else if (this.currentActive < 1) {
                this.currentActive = this.childCount
            }
        },
        // 设置位移距离
        setTransfromFun(move, transition) {
            // move: 手指滑动时的距离
            // noTransition: 是否需要过渡效果
            if (!move || move == '') move = 0
            if (transition) {
                this.carouselBox.style.transitionDuration = '300ms'
            } else {
                this.carouselBox.style.transitionDuration = '0ms'
            }
            let X = `translateX(-${(this.currentActive - 1) *
                this.carouselBox.clientWidth +
                move}px)`
            X = X.replace(/\-\-/, '')
            this.carouselBox.style.transform = X
        },
    },
}
</script>
<style lang="less" scoped>
.star-carousel {
    position: relative;
    height: 200px;
    width: 100%;
    overflow-x: hidden;
    &__box {
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
        * {
            width: 100%;
            height: 100%;
            flex-shrink: 0;
        }
    }
    &__instructions {
        position: absolute;
        bottom: 10px;
        width: 100%;
        display: flex;
        z-index: 1;
        align-items: center;
        justify-content: center;
        &__box {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: rgba(225, 225, 225, 0.4);
            margin-right: 24px;
            transition: all 500ms ease;
        }
        &__box:last-child {
            margin: 0;
        }
    }
}
</style>
