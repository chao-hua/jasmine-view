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
        value:{},
        label: {},
        disabled: Boolean,
    },
    data() {
        return {
            showClickAnimation: false
        }
    },
    computed: {
        buttonDisabled() {
            return this.disabled;
        },
        buttonSize() {
            return this.size;
        }
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