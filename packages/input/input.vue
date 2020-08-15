<template>
    <div class="star-input-box star-flex" :class="disabled && 'star-disabled'">
        <div class="star-input-icon">
            <slot name="icon" />
        </div>
        <input
            ref="input"
            v-bind="$attrs"
            @focus="onFocus"
            @blur="onBlur"
            @input="onInput"
            @compositionstart="onCompositionstart"
            @compositionupdate="onCompositionupdate"
            @compositionend="onCompositionend"
            @change="onChange"
            :type="type"
            :disabled="disabled"
            :readonly="readonly"
            :maxlength="maxlength"
            :placeholder="placeholder"
            class="star-input"
        />
        <div class="star-input-icon">
            <star-icon
                @click="onClear"
                v-if="clear && !disabled && !readonly && showClear"
                name="times-circle"
                color="#ccc"
                size="18"
            ></star-icon>
        </div>
    </div>
</template>
<script>
export default {
    name: "starInput",
    props: {
        value: [String, Number],
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: "",
        },
        maxlength: {
            type: [Number, String],
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        clear: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        nativeVale() {
            return this.value === null || this.value === undefined
                ? ""
                : String(this.value);
        },
    },
    data() {
        return {
            isFocus: false,
            showClear: false,
            isonComposition: false,
        };
    },
    watch: {
        nativeVale(val) {
            this.setNativeInputValue();
        },
        type() {
            this.$nextTick(() => {
                this.setNativeInputValue();
            });
        },
    },
    mounted() {
        this.getClearType();
        this.setNativeInputValue();
    },
    methods: {
        onFocus() {
            this.isFocus = true;
            this.$emit("focus");
        },
        onBlur() {
            this.isFocus = false;
            this.$emit("blur");
        },
        onInput(event) {
            if (this.isonComposition) return;
            if (event.target.value === this.nativeVale) return;
            this.getClearType();
            this.$emit("input", event.target.value);
            this.$nextTick(this.setNativeInputValue);
        },
        onChange(event) {
            this.$emit("change", event.target.value);
        },
        onClear() {
            this.$refs.input.value = "";
            this.showClear = false;
            this.$emit("input", "");
        },
        onCompositionstart() {
            this.isonComposition = true;
        },
        onCompositionupdate(event) {
            const text = event.target.value;
            const lastCharacter = text[text.length - 1] || "";
            const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
            this.isonComposition = !reg.test(lastCharacter);
        },
        onCompositionend(event) {
            if (this.isonComposition) {
                this.isonComposition = false;
                this.onInput(event);
            }
        },
        setNativeInputValue() {
            const input = this.$refs.input;
            if (!input) return;
            if (input.value === this.nativeVale) return;
            input.value = this.nativeVale;
        },
        getClearType() {
            this.$nextTick(() => {
                const input = this.$refs.input;
                if (input.value) {
                    this.showClear = true;
                } else {
                    this.showClear = false;
                }
            });
        },
    },
};
</script>
<style lang="less" scoped>
.star-input-box {
    width: 100%;
    height: 42px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid #eaeaea;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    .star-input {
        width: 80%;
        height: 100%;
    }
    .star-input-icon {
        width: 10%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.star-disabled::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(225, 225, 225, 0.5);
}
</style>