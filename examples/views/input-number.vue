<template>
    <div>
        <div class="row">
            <js-input-number v-model="inputNumber1" @change="handleChange1" @input="handleInputNumber1" @focus="handleFocus1" @blur="handleBlur1" @clear="hadnleClose1"></js-input-number>
            {{inputNumber1}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputNumber1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: ''
        }
    },
    methods: {
        handleChange1(val) {
            console.log('handleChange1:' + val);
        },
        handleInputNumber1(val) {
            console.log('handleInputNumber1：' + val);
        },
        handleFocus1(val) {
            console.log(val);
        },
        handleBlur1(val) {
            console.log(val);
        },
        hadnleClose1() {
            console.log('hadnleClose1');
        }
    }
}
</script>
<style lang="scss" scoped>
.row {
    margin: 10px 0;
}

.js-input,
.js-textarea
 {
    width: 400px;
}
</style>