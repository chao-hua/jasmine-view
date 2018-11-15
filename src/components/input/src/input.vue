<template>
    <input type="text" :value="currentValue" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
</template>
<script>
import Emitter from 'mixins/emitter.js'
export default {
    name: 'JsInput',
    componentName: 'JsInput',
    mixins: [Emitter],
    props: {
        value: {},
    },
    data() {
        return {
            currentValue: this.value === undefined || this.value === null ? '' : this.value,
        }
    },
    computed: {
        isGroup() {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'JsCheckboxGroup') {
                    parent = parent.$parent;
                } else {
                    this._checkboxGroup = parent;
                    return true;
                }
            }
            return false;
        },
        model: {
            get() {
                return this.isGroup ? this._checkboxGroup.value : this.value;
            },
            set(val) {
                if (this.isGroup) {
                    this.isLimited = false;
                    if (this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min)
                        this.isLimited = true;
                    if (this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max)
                        this.isLimited = true;
                    !this.isLimited && this.dispatch('JsCheckboxGroup', 'input', val);
                } else {
                    this.$emit('input', val);
                }
            }
        },
        isChecked() {
            if (Object.prototype.toString.call(this.model) === '[object Boolean]') {
                return this.model;
            } else if (Array.isArray(this.model)) {
                return this.model.indexOf(this.label) > -1;
            }
        },
        isDisabled() {
            return this.isGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled;
        },
        tabIndex() {
            return this.isDisabled ? -1 : (this.isGroup ? (this.model === this.label ? 0 : -1) : 0);
        },
        checkboxSize() {
            return this.isGroup ? this._checkboxGroup.size || '' : '';
        },
        isButton() {
            return this.isGroup ? this._checkboxGroup.button || '' : '';
        }
    },
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