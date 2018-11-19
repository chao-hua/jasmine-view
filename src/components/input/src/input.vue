<template>
    <div :class="[
        type==='textarea' ? 'js-textarea' : 'js-input',
        inputSize ? 'js-input--' + inputSize : '',
        {
            'is-disabled': disabled,
            'js-input-group': $slots.prepend || $slots.append,
            'js-input-group--append': $slots.append,
            'js-input-group--prepend': $slots.prepend,
            'js-input--prefix': $slots.prefix || prefixIcon,
            'js-input--suffix': $slots.suffix || suffixIcon || clearable
        }
    ]">
        <template v-if="type !== 'textarea'">
            <div class="js-input-group__prepend" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <span class="js-input__prefix" v-if="$slots.prefix || prefixIcon">
                <slot name="prefix"></slot>
                <i class="js-input__icon fa" v-if="prefixIcon" :class="'fa-'+prefixIcon"></i>
            </span>
            <input type="text" ref="input" class="js-input__inner" v-bind="$attrs" :value="value" :disabled="disabled" @input="handleInput" @change="handleChange" @focus="handleFocus" @blur="handleBlur" @compositionstart="handleComposition" @compositionupdate="handleComposition" @compositionend="handleComposition">
            <span class="js-input__suffix" v-if="$slots.suffix || suffixIcon || showClear">
                <template v-if="!showClear">
                    <slot name="suffix"></slot>
                    <i class="js-input__icon fa" v-if="suffixIcon" :class="'fa-'+suffixIcon"></i>
                </template>
                <i v-else class="fa fa-times-circle js-input__icon js-input__clear" @click="clear"></i>
            </span>
            <div class="js-input-group__append" v-if="$slots.append">
                <slot name="append"></slot>
            </div>
        </template>
        <textarea v-else type="textarea" ref="textarea" class="js-textarea__inner" v-bind="$attrs" :value="value" :disabled="disabled" @input="handleInput" @change="handleChange" @focus="handleFocus" @blur="handleBlur" @compositionstart="handleComposition" @compositionupdate="handleComposition" @compositionend="handleComposition"></textarea>
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
        },
        suffixIcon: String,
        prefixIcon: String,
    },
    data() {
        return {
            isOnComposition: false,
        }
    },
    computed: {
        showClear() {
            return this.clearable && !this.disabled && this.value !== '';
        },
        inputSize() {
            return this.size;
        }
    },
    methods: {
        focus() {
            (this.$refs.input || this.$refs.textarea).focus();
        },
        blur() {
            (this.$refs.input || this.$refs.textarea).blur();
        },
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
        clear(ev) {
            this.$emit('input', '');
            this.$emit('change', '');
            this.$emit('clear');
            this.focus();
        }
    }
};
</script>