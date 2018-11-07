<template>
    <label class="js-radio" :class="[
        {'is-disabled': isDisabled},
        {'is-focus': focus},
        {'is-checked': model === label},
    ]" role="radio" :aria-checked="model === label" :aria-disabled="isDisabled" :tabindex="tabIndex">
        <span class="js-radio__input"
        :class="{'is-disabled': isDisabled, 'is-checked': model === label}">
            <span class="js-radio__inner"></span>
        <input type="radio" class="js-radio__original" :value="label" aria-hidden="true" v-model="model" @focus="focus = true" @blur="focus = false" @change="handelChange" :name="name" :disabled="isDisabled" tabindex="-1">
        </span>
        <span class="js-radio__label">
            <slot></slot>
            <template v-if="!$slots.default">{{ label }}</template>
        </span>
    </label>
</template>
<script>
import { oneOf } from 'utils/util.js'
import Emitter from 'mixins/emitter.js'
export default {
    name: 'JsRadio',
    componentName: 'JsRadio',
    mixins: [Emitter],
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
        }
    },
    data() {
        return {
            focus: false
        }
    },
    computed: {
        isGroup() {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'JsRadioGroup') {
                    parent = parent.$parent;
                } else {
                    this._radioGroup = parent;
                    return true;
                }
            }
            return false;
        },
        model: {
            get() {
                return this.isGroup ? this._radioGroup.value : this.value;
            },
            set(val) {
                if (this.isGroup) {
                    this.dispatch('JsRadioGroup', 'input', val);
                } else {
                    this.$emit('input', val);
                }
            }
        },
        isDisabled() {
            return this.isGroup ? this._radioGroup.disabled || this.disabled : this.disabled;
        },
        tabIndex() {
            return this.isDisabled ? -1 : (this.isGroup ? (this.model === this.label ? 0 : -1) : 0);
        }
    },
    methods: {
        handelChange() {
            this.$nextTick(() => {
                this.$emit('change', this.model);
                this.isGroup && this.dispatch('JsRadioGroup', 'change', this.model);
            });
        }
    }
};
</script>