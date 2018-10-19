<template>
    <div>
        <js-row class="row">
            <js-col class="item item-1" :span="10">js-col-1</js-col>
            <js-col class="item item-2">js-col-2</js-col>
            <js-col class="item item-3">js-col-3</js-col>
        </js-row>
    </div>
</template>
<script>
export default {
    methods: {
        test() {
            alert('测试');
        }
    }
}
</script>
<style lang="scss">
.row {
    margin: 10px 0;
    height: 200px;
}

.item {
    background-color: #9999CC;
    border-radius: 4px;
}

@for $i from 1 through 3 {
    .item-#{$i} {
        // height: $i * 50 + px;
        // width: $i * 80 + px;
    }
}
</style>