<template>
    <div>
        <div class="row">
            <js-checkbox v-model="checkbox1" @change="handleChange1">选项1</js-checkbox>
            <js-checkbox v-model="checkbox2" label="选项2" disabled></js-checkbox>
            <js-checkbox v-model="checkbox3" label="选项3" disabled></js-checkbox>
        </div>
        <div class="row">
            <js-checkbox v-model="checkbox4" label="item1" @change="handleChange2">选项1</js-checkbox>
            <js-checkbox v-model="checkbox4" label="item2" @change="handleChange2">选项2</js-checkbox>
            <js-checkbox v-model="checkbox4" label="item3" @change="handleChange2">选项3</js-checkbox>
            <js-checkbox v-model="checkbox4" label="item4" @change="handleChange2">选项4</js-checkbox>
        </div>
        <div class="row">
            <js-checkbox-group v-model="checkbox5" @change="handleChange3">
                <js-checkbox label="item1">选项1</js-checkbox>
                <js-checkbox label="item2">选项2</js-checkbox>
                <js-checkbox label="item3">选项3</js-checkbox>
                <js-checkbox label="item4" disabled>选项4</js-checkbox>
            </js-checkbox-group>
        </div>
        <div class="row">
            <js-checkbox-group v-model="checkbox6" @change="handleChange4" :mix="1" :max="2">
                <js-checkbox label="item1">选项1</js-checkbox>
                <js-checkbox label="item2">选项2</js-checkbox>
                <js-checkbox label="item3">选项3</js-checkbox>
                <js-checkbox label="item4" disabled>选项4</js-checkbox>
            </js-checkbox-group>
        </div>
        <div class="row">
            <js-checkbox v-model="checkboxAll" @change="handleAll" :indeterminate="isIndeterminate">全选</js-checkbox>
            <br>
            <js-checkbox-group v-model="checkboxList" @change="handleChange" style="margin-top:10px;">
                <js-checkbox :label="item" v-for="item in itemOptions"></js-checkbox>
            </js-checkbox-group>
        </div>
        <div class="row">
            <js-checkbox-group v-model="checkbox7" @change="handleChange5" button>
                <js-checkbox label="item1">选项1</js-checkbox>
                <js-checkbox label="item2">选项2</js-checkbox>
                <js-checkbox label="item3">选项3</js-checkbox>
                <js-checkbox label="item4" disabled>选项4</js-checkbox>
            </js-checkbox-group>
        </div>
        <div class="row">
            <js-checkbox-group v-model="checkbox8" @change="handleChange6" button size="medium">
                <js-checkbox label="item1">选项1</js-checkbox>
                <js-checkbox label="item2">选项2</js-checkbox>
                <js-checkbox label="item3">选项3</js-checkbox>
                <js-checkbox label="item4" disabled>选项4</js-checkbox>
            </js-checkbox-group>
        </div>
        <div class="row">
            <js-checkbox-group v-model="checkbox9" @change="handleChange6" button size="small">
                <js-checkbox label="item1">选项1</js-checkbox>
                <js-checkbox label="item2">选项2</js-checkbox>
                <js-checkbox label="item3">选项3</js-checkbox>
                <js-checkbox label="item4" disabled>选项4</js-checkbox>
            </js-checkbox-group>
        </div>
        <div class="row">
            <js-checkbox-group v-model="checkbox10" @change="handleChange8" vertical>
                <js-checkbox label="item1">选项1</js-checkbox>
                <js-checkbox label="item2">选项2</js-checkbox>
                <js-checkbox label="item3">选项3</js-checkbox>
                <js-checkbox label="item4" disabled>选项4</js-checkbox>
            </js-checkbox-group>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checkbox1: true,
            checkbox2: false,
            checkbox3: true,
            checkbox4: ['item1', 'item4'],
            checkbox5: ['item1', 'item4'],
            checkbox6: ['item1', 'item4'],
            checkbox7: ['item1', 'item4'],
            checkbox8: ['item1', 'item4'],
            checkbox9: ['item1', 'item4'],
            checkbox10: [],
            checkboxAll: false,
            isIndeterminate: false,
            checkboxList: [],
            itemOptions: ['项目1', '项目2', '项目3', '项目4']
        }
    },
    methods: {
        handleChange1(val) {
            console.log('handleChange1：' + val);
        },
        handleChange2(val, list) {
            console.log('handleChange2：' + val + ' ' + list);
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
        },
        handleChange8(val) {
            console.log('handleChange8：' + val);
        },
        handleAll(val) {
            this.checkboxList = val ? this.itemOptions : [];
            this.isIndeterminate = false;
        },
        handleChange(val) {
            this.checkboxAll = this.itemOptions.length === val.length;
            this.isIndeterminate = val.length > 0 && val.length < this.itemOptions.length;
        }
    }
}
</script>
<style lang="scss" scoped>
.row {
    margin: 10px 0;
}
</style>