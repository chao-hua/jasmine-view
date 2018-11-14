<template>
    <div>
        <div class="row">
            <js-radio v-model="radio1" label="item1" @change="handleChange1">选项1</js-radio>
            <js-radio v-model="radio1" label="item2" @change="handleChange1">选项2</js-radio>
            <js-radio v-model="radio1" label="item3" @change="handleChange1" disabled>选项3</js-radio>
            <js-radio v-model="radio1" label="item4" @change="handleChange1" disabled>选项4</js-radio>
        </div>
        <div class="row">
            <js-radio-group v-model="radio2" @change="handleChange2">
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
        <div class="row">
            <js-radio-group v-model="radio3" @change="handleChange3" button>
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
        <div class="row">
            <js-radio-group v-model="radio4" @change="handleChange4" button size="medium">
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
        <div class="row">
            <js-radio-group v-model="radio5" @change="handleChange5" button size="small">
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
        <div class="row">
            <js-radio-group v-model="radio6" @change="handleChange6" disabled button>
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
        <div class="row">
            <js-radio-group v-model="radio7" @change="handleChange7" vertical>
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            radio1: 'item4',
            radio2: 'item4',
            radio3: 'item4',
            radio4: 'item4',
            radio5: 'item4',
            radio6: 'item4',
            radio7: 'item4'
        }
    },
    methods: {
        handleChange1(val) {
            console.log('handleChange1：' + val);
        },
        handleChange2(val) {
            console.log('handleChange2：' + val);
        },
        handleChange3(val) {
            console.log('handleChange3：' + val);
        },
        handleChange4(val) {
            console.log('handleChange4：' + val);
        },
        handleChange5(val) {
            console.log('handleChange5：' + val);
        },
        handleChange6(val) {
            console.log('handleChange6：' + val);
        },
        handleChange7(val) {
            console.log('handleChange7：' + val);
        }
    }
}
</script>
<style lang="scss" scoped>
.row {
    margin: 10px 0;
}
</style>