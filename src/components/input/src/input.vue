<template>
    <div class="js-input">
        <input type="text" :value="currentValue" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
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
        value: [String, Number],
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
        },
        max: Number,
        min: Number,
        placeholder: String
    },
    data() {
        return {
            currentValue: this.value === undefined || this.value === null ? '' : this.value,
        }
    },
    computed: {},
    methods: {
        handleChange(ev) {
            this.$emit('change', ev.target.value);
        },
        handleInput(ev) {
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