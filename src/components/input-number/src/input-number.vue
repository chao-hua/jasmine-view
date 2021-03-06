<template>
    <div :class="[
        'js-input-number',
        inputNumberSize ? 'js-input-number--' + inputNumberSize : '',
        {
            'is-disabled': disabled,
            'is-without-controls': !controls,
            'is-controls-right': controlsAtRight,
        }
    ]">
        <span class="js-input-number__decrease" :class="{'is-disabled': minDisabled}" v-if="controls" role="button">
            <i class="fa fa-minus"></i>
        </span>
        <span class="js-input-number__increase" :class="{'is-disabled': maxDisabled}" v-if="controls" role="button">
            <i class="fa fa-plus"></i>
        </span>
        <js-input ref="input" :value="currentInputValue" :disabled="inputNumberDisabled" :size="inputNumberSize" :max="max" :min="min" @blur="handleBlur" @focus="handleFocus" @change="handleChange"></js-input>
    </div>
</template>
<script>
import Emitter from 'mixins/emitter.js'
import JsInput from 'components/input'
import { oneOf } from 'utils/util.js'
export default {
    name: 'JsInputNumber',
    componentName: 'JsInputNumber',
    mixins: [Emitter],
    components: {
        JsInput
    },
    props: {
        value: {},
        step: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        precision: {
            type: Number,
            validator(val) {
                return val >= 0 && val === parseInt(val, 10);
            }
        },
        disabled: Boolean,
        controls: {
            type: Boolean,
            default: true
        },
        controlsPosition: {
            type: String,
            default: '',
            validator(val) {
                return oneOf(val, ['', 'right']);
            }
        },
        size: {
            type: String,
            validator(val) {
                return oneOf(val, ['medium', 'small']);
            }
        },
        label: String,
    },
    data() {
        return {
            currentValue: 0
        }
    },
    computed: {
        inputNumberSize() {
            return this.size;
        },
        controlsAtRight() {
            return this.controlsPosition === 'right';
        },
        minDisabled() {
            return (this.value - this.step) < this.min;
        },
        maxDisabled() {
            return (this.value + this.step) > this.max;
        },
        inputNumberDisabled() {
            return this.disabled;
        },
        currentInputValue() {
            if (typeof this.currentValue === 'number' && this.precision !== undefined) {
                return this.currentValue.toFixed(this.precision);
            }
            return this.currentValue;
        }, 
    },
    methods: {
        toPrecision(num, precision) {
            return precision ? parseFloat(Number(num).toFixed(precision)) : num;
        },
        handleChange(val) {
            const newVal = val === '' ? undefined : Number(val);
            if (!isNaN(newVal) || val === '') {
                this.setCurrentValue(newVal);
            }
        },
        handleFocus(ev) {
            this.$emit('focus', event);
        },
        handleBlur(ev) {
            this.$emit('blur', event);
            // this.$refs.input.setCurrentValue(this.currentInputValue);
        },
        setCurrentValue(newVal) {
            const oldVal = this.currentValue;
            if (typeof newVal === 'number' && this.precision !== undefined) {
                newVal = this.toPrecision(newVal, this.precision);
            }
            if (newVal >= this.max) newVal = this.max;
            if (newVal <= this.min) newVal = this.min;
            if (newVal === oldVal) {
                // this.$refs.input.setCurrentValue(this.currentInputValue);
                return;
            }
            this.$emit('input', newVal);
            this.$emit('change', newVal, oldVal);
            this.currentValue = newVal;
        },
        increase(){
            if(this.inputNumberDisabled || this.maxDisabled) return;
            const value = this.value || 0;
        }
    },
    watch:{
        value:{
            immediate:true,
            handler(value){
                /*console.log('value:'+value);
                console.log('currentValue:'+this.currentValue);
                console.log('currentInputValue:'+this.currentInputValue);*/
                let newVal = value === undefined ? value : Number(value);
                if (newVal !== undefined) {
                  if (isNaN(newVal)) {
                    return;
                  }
                  if (this.precision !== undefined) {
                    newVal = this.toPrecision(newVal, this.precision);
                  }
                }
                if (newVal >= this.max) newVal = this.max;
                if (newVal <= this.min) newVal = this.min;
                this.currentValue = newVal;
                this.$emit('input', newVal);
            }
        }
    }
};
</script>
