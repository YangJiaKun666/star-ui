<template>
    <div
        :class="['star-checkbox', 'star-flex', size && `star-${size}`]"
        @click="toggleCheck"
    >
        <div
            :class="[
                'star-checkbox-box',
                nativeValue && ['star-background', 'star-checked'],
                round && 'star-round',
            ]"
        >
            <transition name="star-fade-scale">
                <star-icon
                    v-if="nativeValue"
                    name="check"
                    color="#fff"
                    size="12"
                ></star-icon>
            </transition>
        </div>
        <div class="star-checkbox-label star-color" v-if="label">
            {{ label || '' }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'starCheckbox',
    model: {
        prop: 'isCheck',
        event: 'change',
    },
    props: {
        label: String,
        size: {
            type: String,
            default: 'mini',
        },
        round: Boolean,
    },
    data() {
        return {
            nativeValue: false,
        }
    },
    mounted() {
        this.nativeValue = this.$attrs.isCheck
    },
    methods: {
        toggleCheck() {
            this.nativeValue = !this.nativeValue
            this.$attrs.isCheck = this.nativeValue
            this.$emit('change', this.$attrs.isCheck)
        },
    },
}
</script>
<style lang="less" scoped>
.star-checkbox {
    .star-checkbox-box {
        padding: 2px;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        border: 2px solid #666;
    }
    .star-checked {
        border: 0 !important;
    }
    .star-checkbox-label {
        margin-left: 6px;
    }
}
.star-mini {
    .star-checkbox-box {
        width: 16px;
        height: 16px;
    }
    .star-checkbox-label {
        font-size: 14px;
    }
}
.star-small {
    .star-checkbox-box {
        width: 18px;
        height: 18px;
    }
    .star-checkbox-label {
        font-size: 16px;
    }
}
.star-langer {
    .star-checkbox-box {
        width: 20px;
        height: 20px;
    }
    .star-checkbox-label {
        font-size: 18px;
    }
}
.star-round {
    border-radius: 50% !important;
}
</style>
