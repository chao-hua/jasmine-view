<template>
    <div>
        <div class="row">
            <js-input v-model="input1" @change="handleChange1" @input="handleInput1" @focus="handleFocus1" @blur="handleBlur1"></js-input>
            {{input1}}
        </div>
        <div class="row">
            <js-input v-model="input2"></js-input>
            {{input2}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input1: '',
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
        handleInput1(val) {
            console.log('handleInput1：' + val);
        },
        handleFocus1(val) {
            console.log(val);
        },
        handleBlur1(val) {
            console.log(val);
        },
    }
}
</script>
<style lang="scss" scoped>
.row {
    margin: 10px 0;
}
</style>