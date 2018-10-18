<template>
    <div>
        <js-row type="flex" justify="end" align="end" class="row" :gutter="20">
            <div class="item item-1"></div>
            <div class="item item-2"></div>
            <div class="item item-3"></div>
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
<style>
.row{
	margin:10px 0;
}
.item {
    width: 50px;
    height: 30px;
    background-color: #9999CC;
    border-radius: 4px;
}
</style>