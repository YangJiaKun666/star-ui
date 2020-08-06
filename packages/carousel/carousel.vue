<template>
    <div class="star-carousel" :style="{ height: `${height}px` }">
        <!-- 
            @touchstart="touchStart($event)"
            @touchmove="touchMove($event)"
        @touchend="touchEnd($event)"-->
        <ul class="star-carousel-imgs">
            <slot />
        </ul>
        <ul class="star-carousel-spots">
            <li
                class="star-carousel-spot"
                :style="transitionType"
                v-for="(item,index) of carousels"
                :key="index"
                :class="active == index && ['star-carousel-current','star-background']"
            ></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "starCarousel",
    props: {
        playDuration: {
            type: [String, Number],
            default: 3000,
        },
        transitionType: {
            type: [Object, String],
            default: () => {
                return { transition: "all 300ms ease" };
            },
        },
        height: {
            type: [Number, String],
            default: 130,
        },
    },
    data() {
        return {
            stateTimer: null,
            carousels: this.$children,
            active: 0,
        };
    },
    watch: {
        active(val) {
            if (this.active != val) this.$emit("change", val);
        },
        playDuration(val) {
            location.reload();
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.autoPlay();
        });
    },
    methods: {
        autoPlay() {
            this.stateTimer = setInterval(() => {
                if (this.active < this.carousels.length - 1) {
                    this.active++;
                } else {
                    this.active = 0;
                }
            }, Number(this.playDuration));
        },
    },
};
</script>
<style lang="less" scoped>
.star-carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    .star-carousel-imgs,
    .star-carousel-spots {
        position: absolute;
        flex: 1;
        height: 100%;
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .star-carousel-spots {
        bottom: 10px;
        left: 0;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .star-carousel-spot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: rgba(225, 225, 225, 0.5);
            margin-right: 20px;
        }
        .star-carousel-current {
            width: 20px;
            border-radius: 20px;
        }
        .star-carousel-spot:last-child {
            margin-right: 0;
        }
    }
}
</style>