<template>
    <div class="star-carousel">
        <div class="star-carousel__box" ref="carouselBox" @touchstart="handlerStart" @touchmove="handlerMove" @touchend="handlerEnd">
            <slot />
        </div>
        <div class="star-carousel__instructions">
            <div :class="['star-carousel__instructions__box',currentActive == index && 'star-background']" v-for="(item , index) of childCount" :key="index"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'starCarousel',
    props: {
        duration: {
            type: [String,Number],
            default: 3000
        },
        autoPlay: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            childCount: 0,
            carouselBox: null,
            timeName: null,
            currentActive: 0,
            start: 0,
            move: 0
        }
    },
    mounted() {
        this.$nextTick(()=>{
            this.carouselBox = this.$refs.carouselBox
            this.childCount = this.$children.length
            if(this.autoPlay) {
                this.setIntervalFun()
            }
        })
    },
    methods: {
        // 当手指触摸开始
        handlerStart(event) {
            clearInterval(this.timeName)
            this.start = event.touches[0].pageX
        },
        // 当手指移动时
        handlerMove(event) {
            let move = event.touches[0].pageX
            this.move = this.start - event.touches[0].pageX
            this.setTransfromFun(this.move)
        },
        // 当手指触摸结束
        handlerEnd(event) {
            console.log(this.move)
            if(this.move > 100) {
                this.currentActive ++
            } else if(this.move < -100) {
                this.currentActive --
            }
            this.setActiveFun()
            this.setTransfromFun()
            this.setIntervalFun()
        },
        setIntervalFun() {
            this.timeName = setInterval(()=>{
                this.currentActive ++
                this.setActiveFun()
                this.setTransfromFun()
            },this.duration)
        },
        setActiveFun() {
            if(this.currentActive >= this.childCount) {
                this.currentActive = 0
            } else if(this.currentActive < 0) {
                this.currentActive = this.childCount - 1
            }
        },
        setTransfromFun(move){
            if(!move) {
                this.carouselBox.style.transition = 'all 300ms ease'
                move = 0
            } else {
                this.carouselBox.style.transition = 'all 0ms ease'
            }
            let X = `translateX(-${this.currentActive * this.carouselBox.clientWidth + move}px)`
            console.log(X)
            this.carouselBox.style.transform = X
        }
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
            background: rgba(225,225,225,0.4);
            margin-right: 24px;
            transition: all 500ms ease;
        }
        &__box:last-child {
            margin: 0;
        }
    }
}
</style>