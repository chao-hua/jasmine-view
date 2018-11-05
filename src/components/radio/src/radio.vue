<template>
    <input type="radio">
</template>
<script>
import { oneOf } from 'utils/util.js'
import { on } from 'utils/dom.js'
export default {
    name: 'JsRadio',
    props: {
        label: {
            type: String,
        },
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
        on(this.$el, 'animationend', () => {
            this.showClickAnimation = false;
        });
    },
};
</script>