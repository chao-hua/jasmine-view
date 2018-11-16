<template>
    <div>
        <div class="row">
            <js-input v-model="input1" @change="handleChange1" @input="handleInput1" @focus="handleFocus1" @blur="handleBlur1" @clear="hadnleClose1" placeholder="请输入" clearable></js-input>
            {{input1}}
        </div>
        <div class="row">
            <js-input v-model="input2" disabled></js-input>
            {{input2}}
        </div>
        <div class="row">
            <js-input type="textarea" v-model="input3" :rows="4"></js-input>
            {{input3}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input1: '',
            input2: 'disabled',
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
</style>