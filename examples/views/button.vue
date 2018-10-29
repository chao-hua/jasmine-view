<template>
    <div id="button">
        <div class="row">
            <js-button>默认按钮</js-button>
            <js-button plain>朴素按钮</js-button>
            <js-button round>圆角按钮</js-button>
            <js-button circle>圆</js-button>
            <js-button disabled>禁用</js-button>
            <js-button disabled plain>朴素禁用</js-button>
        </div>
        <div class="row">
            <js-button size="medium">默认按钮</js-button>
            <js-button size="medium" plain>朴素按钮</js-button>
            <js-button size="medium" round>圆角按钮</js-button>
            <js-button size="medium" circle>圆</js-button>
            <js-button size="medium" disabled>禁用</js-button>
            <js-button size="medium" disabled plain>朴素禁用</js-button>
        </div>
        <div class="row">
            <js-button size="small">默认按钮</js-button>
            <js-button size="small" plain>朴素按钮</js-button>
            <js-button size="small" round>圆角按钮</js-button>
            <js-button size="small" circle>圆</js-button>
            <js-button size="small" disabled>禁用</js-button>
            <js-button size="small" disabled plain>朴素禁用</js-button>
        </div>
        <div class="row">
            <js-button type="text">默认按钮</js-button>
            <js-button type="text" plain>朴素按钮</js-button>
            <js-button type="text" round>圆角按钮</js-button>
            <js-button type="text" circle>圆</js-button>
            <js-button type="text" disabled>禁用</js-button>
            <js-button type="text" disabled plain>朴素禁用</js-button>
        </div>
        <div class="row">
            <js-button type="primary">默认按钮</js-button>
            <js-button type="primary" plain>朴素按钮</js-button>
            <js-button type="primary" round>圆角按钮</js-button>
            <js-button type="primary" circle>圆</js-button>
            <js-button type="primary" disabled>禁用</js-button>
            <js-button type="primary" disabled plain>朴素禁用</js-button>
        </div>
        <div class="row">
            <js-button type="success">默认按钮</js-button>
            <js-button type="success" plain>朴素按钮</js-button>
            <js-button type="success" round>圆角按钮</js-button>
            <js-button type="success" circle>圆</js-button>
            <js-button type="success" disabled>禁用</js-button>
            <js-button type="success" disabled plain>朴素禁用</js-button>
        </div>
        <div class="row">
            <js-button type="warning">默认按钮</js-button>
            <js-button type="warning" plain>朴素按钮</js-button>
            <js-button type="warning" round>圆角按钮</js-button>
            <js-button type="warning" circle>圆</js-button>
            <js-button type="warning" disabled>禁用</js-button>
            <js-button type="warning" disabled plain>朴素禁用</js-button>
        </div>
        <div class="row">
            <js-button type="danger">默认按钮</js-button>
            <js-button type="danger" plain>朴素按钮</js-button>
            <js-button type="danger" round>圆角按钮</js-button>
            <js-button type="danger" circle>圆</js-button>
            <js-button type="danger" disabled>禁用</js-button>
            <js-button type="danger" disabled plain>朴素禁用</js-button>
        </div>
        <div class="row">
            <js-button type="info">默认按钮</js-button>
            <js-button type="info" plain>朴素按钮</js-button>
            <js-button type="info" round>圆角按钮</js-button>
            <js-button type="info" circle>圆</js-button>
            <js-button type="info" disabled>禁用</js-button>
            <js-button type="info" disabled plain>朴素禁用</js-button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        test() {
            alert('回调函数');
        }
    }
}
</script>
<style lang="scss" scoped>
.row {
    margin: 10px 0;
}
</style>