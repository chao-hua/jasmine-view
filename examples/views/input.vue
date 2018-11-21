<template>
    <div>
        <div class="row">
            <js-input v-model="input1" @change="handleChange1" @input="handleInput1" @focus="handleFocus1" @blur="handleBlur1" @clear="hadnleClose1" placeholder="请输入" clearable></js-input>
            {{input1}}
        </div>
        <div class="row">
            <js-input v-model="input2" disabled clearable></js-input>
            {{input2}}
        </div>
        <div class="row">
            <js-input v-model="input3" placeholder="请输入" clearable>
                <i slot="prefix" class="fa fa-terminal js-input__icon"></i>
                <i slot="suffix" class="fa fa-search js-input__icon"></i>
            </js-input>
            {{input3}}
        </div>
        <div class="row">
            <js-input v-model="input4" size="medium" prefix-icon="terminal" suffix-icon="search" placeholder="请输入">
            </js-input>
            {{input4}}
        </div>
        <div class="row">
            <js-input v-model="input5" size="small" prefix-icon="terminal" suffix-icon="search" placeholder="请输入">
            </js-input>
            {{input5}}
        </div>
        <div class="row">
            <js-input type="textarea" v-model="input6" :rows="4" placeholder="请输入"></js-input>
            {{input6}}
        </div>
        <div class="row">
            <js-input type="textarea" v-model="input7" disabled placeholder="请输入"></js-input>
            {{input7}}
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
        handleFocus1(e) {
            console.log(e);
        },
        handleBlur1(e) {
            console.log(e);
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