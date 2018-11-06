<template>
    <div>
        <js-radio v-model="gender" label="m">男</js-radio>
        <js-radio v-model="gender" label="w">女</js-radio>
    </div>
</template>
<script>
export default {
    data() {
        return {
            gender: true
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