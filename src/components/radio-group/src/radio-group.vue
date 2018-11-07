<template>
    <div class="js-radio-group" :class="[
    button && radioSize ? 'el-radio-group--' + radioSize : '',
    {'is-button': button},
    {'is-vertical': vertical},
    ]" role="radiogroup">
        <slot></slot>
    </div>
</template>
<script>
import { oneOf } from 'utils/util.js'
export default {
    name: 'JsRadioGroup',
    componentName: 'JsRadioGroup',
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
    },
    computed: {
        radioSize() {
            return this.size;
        }
    },
    methods: {}
};
</script>