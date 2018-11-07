<template>
    <div>
        <div class="row">
            <js-radio v-model="item" label="item1" @change="handelChange">选项1</js-radio>
            <js-radio v-model="item" label="item2" @change="handelChange">选项2</js-radio>
            <js-radio v-model="item" label="item2" @change="handelChange" disabled>选项3</js-radio>
            <js-radio v-model="item" label="item4" @change="handelChange" disabled>选项4</js-radio>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            item: 'item4'
        }
    },
    methods: {
        handelChange(val) {
            console.log(val);
        }
    }
}
</script>
<style lang="scss" scoped>
.row {
    margin: 10px 0;
}

.item div {
    background-color: #9999CC;
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
    padding: 0 5px;
    text-align: center;
}

.item-2 div {
    background-color: rgba(#9999CC, .6);
}

.item-3 div {
    background-color: rgba(#9999CC, .3);
}
</style>