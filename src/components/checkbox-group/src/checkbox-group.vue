<template>
    <div class="js-checkbox-group" :class="[
    {'is-vertical': vertical},
    ]" role="checkboxgroup">
        <slot></slot>
    </div>
</template>
<script>
import { oneOf } from 'utils/util.js'
export default {
    name: 'JsCheckboxGroup',
    componentName: 'JsCheckboxGroup',
    props: {
        value: {},
        size: {
            type: String,
            validator(val) {
                return oneOf(val, ['medium', 'small']);
            }
        },
        disabled: Boolean,
        button: Boolean,
        vertical: Boolean,
        min: Number,
        max: Number,
    },
    computed: {
        checkboxSize() {
            return this.size;
        }
    },
};
</script>