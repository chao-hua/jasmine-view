<template>
    <div class="js-input">
        <input type="text" class="js-input__inner" v-bind="$attrs" :value="value" :disabled="disabled" @input="handleInput" @change="handleChange" @focus="handleFocus" @blur="handleBlur" @compositionstart="handleComposition" @compositionupdate="handleComposition" @compositionend="handleComposition">
    </div>
</template>
<script>
import Emitter from 'mixins/emitter.js'
import { oneOf } from 'utils/util.js'
export default {
    name: 'JsInput',
    componentName: 'JsInput',
    mixins: [Emitter],
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        disabled: Boolean,
        clearable: Boolean,
        size: {
            type: String,
            validator(val) {
                return oneOf(val, ['medium', 'small']);
            }
        },
        type: {
            type: String,
            default: 'text',
            validator(val) {
                return oneOf(val, ['text', 'textarea']);
            }
        }
    },
    data() {
        return {
            isOnComposition: false,
        }
    },
    computed: {},
    methods: {
        handleComposition(ev) {
            if (ev.type === 'compositionend') {
                this.isOnComposition = false;
                this.handleInput(ev);
            } else {
                this.isOnComposition = true;
            }
        },
        handleChange(ev) {
            this.$emit('change', ev.target.value);
        },
        handleInput(ev) {
            if (this.isOnComposition) return;
            this.$emit('input', ev.target.value);
        },
        handleFocus(ev) {
            this.$emit('focus', event);
        },
        handleBlur(ev) {
            this.$emit('blur', event);
        },
    }
};
</script>