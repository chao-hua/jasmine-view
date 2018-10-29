<template>
    <div id="row">
        <js-row type="flex" justify="center" align="stretch" class="row">
            <div class="item item-1">item1</div>
            <div class="item item-2">item2</div>
            <div class="item item-3">item3</div>
        </js-row>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
#row {
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
            width: $i * 50 + px;
        }
    }
}
</style>