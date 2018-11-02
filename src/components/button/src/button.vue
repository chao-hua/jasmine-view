<template>
    <button class="js-button" @click="handleClick" :disabled="buttonDisabled || loading" :autofocus="autofocus" :type="nativeType" :class="[
      type ? 'js-button--' + type : '',
      buttonSize ? 'js-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-lang': lang,
        'is-click': showClickAnimation,
      }
    ]">
        <i class="js-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
import { oneOf } from 'utils/util.js'
import { on } from 'utils/dom.js'
export default {
    name: 'JsButton',
    props: {
        type: {
            type: String,
            default: 'default',
            validator(val) {
                return oneOf(val, ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text']);
            }
        },
        size: {
            type: String,
            validator(val) {
                return oneOf(val, ['medium', 'small']);
            }
        },
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean,
        lang: Boolean
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
            this.$emit('click', e);
            this.showClickAnimation = true;
        }
    },
    mounted() {
        on(this.$el, 'animationend', () => {
            this.showClickAnimation = false;
        });
    },
};
</script>