<template>
    <label>
        <input type="radio">
        ceshi
    </label>
</template>
<script>
import { oneOf } from 'utils/util.js'
import { on } from 'utils/dom.js'
export default {
    name: 'JsRadio',
    props: {
        value: {},
        label: {},
        name: String,
        disabled: Boolean,
        size: {
            type: String,
            validator(val) {
                return oneOf(val, ['medium', 'small']);
            }
        },
        border: Boolean
    },
    data() {
        return {
            focus: false
        }
    },
    computed: {
        isGroup() {
            return false;
        },
        model() {},
        isDisabled() {
            return this.disabled;
        },
        radioSize() {
            return this.size;
        },
        tabIndex() {}
    },
    methods: {
        handleClick(e) {
            this.showClickAnimation = true;
            this.$emit('click', e);
        }
    },
    mounted() {
        console.log(this.value)
    },
};
</script>