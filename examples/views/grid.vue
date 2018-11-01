<template>
    <div>
        <js-row class="row" :gutter="20">
            <js-col class="item item-1" :span="10">
                <div>js-col-1</div>
            </js-col>
            <js-col class="item item-2" :span="10">
                <div>js-col-2</div>
            </js-col>
            <js-col class="item item-3" :span="4">
                <div>js-col-3</div>
            </js-col>
        </js-row>
        <js-row class="row">
            <js-col class="item item-1" :span="4">
                <div>js-col-1</div>
            </js-col>
            <js-col class="item item-2" :span="4" :offset="4">
                <div>js-col-2</div>
            </js-col>
            <js-col class="item item-3" :span="4">
                <div>js-col-3</div>
            </js-col>
        </js-row>
        <js-row class="row">
            <js-col class="item item-1" :span="4" :push="4">
                <div>js-col-1</div>
            </js-col>
            <js-col class="item item-2" :span="16">
                <div>js-col-2</div>
            </js-col>
            <js-col class="item item-3" :span="4">
                <div>js-col-3</div>
            </js-col>
        </js-row>
        <js-row class="row">
            <js-col class="item item-1" :span="4" :pull="1">
                <div>js-col-1</div>
            </js-col>
            <js-col class="item item-2" :span="16">
                <div>js-col-2</div>
            </js-col>
            <js-col class="item item-3" :span="4">
                <div>js-col-3</div>
            </js-col>
        </js-row>
        <js-row class="row">
            <js-col class="item item-1" :p="12" :xs="8" :sm="6" :md="4" :lg="2" :xl="1">
                <div>js-col-1</div>
            </js-col>
            <js-col class="item item-2" :p="12" :xs="8" :sm="12" :md="16" :lg="20" :xl="22">
                <div>js-col-2</div>
            </js-col>
            <js-col class="item item-3" :p="0" :xs="8" :sm="6" :md="4" :lg="2" :xl="1">
                <div>js-col-3</div>
            </js-col>
        </js-row>
    </div>
</template>
<script>
export default {}
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