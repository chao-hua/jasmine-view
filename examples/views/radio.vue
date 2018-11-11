<template>
    <div>
        <div class="row">
            <js-radio v-model="radio1" label="item1" @change="handelChange1">选项1</js-radio>
            <js-radio v-model="radio1" label="item2" @change="handelChange1">选项2</js-radio>
            <js-radio v-model="radio1" label="item3" @change="handelChange1" disabled>选项3</js-radio>
            <js-radio v-model="radio1" label="item4" @change="handelChange1" disabled>选项4</js-radio>
        </div>
        <div class="row">
            <js-radio-group v-model="radio2" @change="handelChange2">
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
        <div class="row">
            <js-radio-group v-model="radio3" @change="handelChange3" button>
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
        <div class="row">
            <js-radio-group v-model="radio4" @change="handelChange4" button size="medium">
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
        <div class="row">
            <js-radio-group v-model="radio5" @change="handelChange5" button size="small">
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
        <div class="row">
            <js-radio-group v-model="radio6" @change="handelChange6" disabled button>
                <js-radio label="item1">选项1</js-radio>
                <js-radio label="item2">选项2</js-radio>
                <js-radio label="item3" disabled>选项3</js-radio>
                <js-radio label="item4" disabled>选项4</js-radio>
            </js-radio-group>
        </div>
        <div class="row">
            <js-radio-group v-model="radio7" @change="handelChange7" vertical>
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
        handelChange1(val) {
            console.log('handelChange1：' + val);
        },
        handelChange2(val) {
            console.log('handelChange2：' + val);
        },
        handelChange3(val) {
            console.log('handelChange3：' + val);
        },
        handelChange4(val) {
            console.log('handelChange4：' + val);
        },
        handelChange5(val) {
            console.log('handelChange5：' + val);
        },
        handelChange6(val) {
            console.log('handelChange6：' + val);
        },
        handelChange7(val) {
            console.log('handelChange7：' + val);
        }
    }
}
</script>
<style lang="scss" scoped>
.row {
    margin: 10px 0;
}
</style>