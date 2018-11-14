<template>
    <div>
        <div class="row">
            <js-checkbox v-model="checkbox1" @change="handleChange1">选项1</js-checkbox>{{checkbox1}}
            <js-checkbox v-model="checkbox2" label="选项2" disabled></js-checkbox>
            <js-checkbox v-model="checkbox3" label="选项3" disabled></js-checkbox>
        </div>
        <div class="row">
            <js-checkbox v-model="checkbox4" label="item1" @change="handleChange2">选项1</js-checkbox>
            <js-checkbox v-model="checkbox4" label="item2" @change="handleChange2">选项2</js-checkbox>
            <js-checkbox v-model="checkbox4" label="item3" @change="handleChange2">选项3</js-checkbox>
            <js-checkbox v-model="checkbox4" label="item4" @change="handleChange2">选项4</js-checkbox>
            <br>
            {{ checkbox4 }}
        </div>
        <div class="row">
            <js-checkbox-group v-model="checkbox5" @change="handleChange3">
                <js-checkbox label="item1">选项1</js-checkbox>
                <js-checkbox label="item2">选项2</js-checkbox>
                <js-checkbox label="item3">选项3</js-checkbox>
                <js-checkbox label="item4">选项4</js-checkbox>
            </js-checkbox-group>
            {{ checkbox5 }}
        </div>
        <div class="row">
            <js-checkbox-group v-model="checkbox6" @change="handleChange4" :mix="1" :max="2">
                <js-checkbox label="item1">选项1</js-checkbox>
                <js-checkbox label="item2">选项2</js-checkbox>
                <js-checkbox label="item3">选项3</js-checkbox>
                <js-checkbox label="item4">选项4</js-checkbox>
            </js-checkbox-group>
            {{ checkbox6 }}
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
            checkbox4: [],
            checkbox5: [],
            checkbox6: [],
            checkbox7: []
        }
    },
    methods: {
        handleChange1(val) {
            console.log('handleChange1：' + val);
        },
        handleChange2(val, list) {
            console.log('handleChange2：' + val + list);
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