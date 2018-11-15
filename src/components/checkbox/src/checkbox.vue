<template>
    <label class="js-checkbox" :class="[
        isButton && checkboxSize ? 'js-checkbox--' + checkboxSize : '',
        {'is-disabled': isDisabled},
        {'is-button': isButton},
        {'is-focus': focus},
        {'is-checked': isChecked},
    ]" role="checkbox" :aria-checked="isChecked" :aria-disabled="isDisabled" :tabindex="tabIndex">
        <span class="js-checkbox__input"
        :class="{
            'is-disabled': isDisabled, 
            'is-checked': isChecked, 
            'is-indeterminate': indeterminate
        }">
            <span class="js-checkbox__inner"></span>
        <input type="checkbox" class="js-checkbox__original" :value="label" aria-hidden="true" v-model="model" @focus="focus = true" @blur="focus = false" @change="handelChange" :name="name" :disabled="isDisabled" tabindex="-1">
        </span>
        <span class="js-checkbox__label">
            <slot></slot>
            <template v-if="!$slots.default">{{ label }}</template>
        </span>
    </label>
</template>
<script>
import Emitter from 'mixins/emitter.js'
export default {
    name: 'JsCheckbox',
    componentName: 'JsCheckbox',
    mixins: [Emitter],
    props: {
        value: {},
        label: {},
        name: String,
        disabled: Boolean,
        indeterminate: Boolean,
    },
    data() {
        return {
            focus: false,
            isLimited: false
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
        handelChange(ev) {
            if (this.isLimited) return;
            this.$nextTick(() => {
                this.$emit('change', ev.target.checked, this.model);
                this.isGroup && this.dispatch('JsCheckboxGroup', 'change', this.model);
            });
        }
    },
};
</script>