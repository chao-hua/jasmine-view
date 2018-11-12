<template>
    <div>
        <div class="row">
            <js-checkbox></js-checkbox>
            <js-checkbox></js-checkbox>
            <js-checkbox></js-checkbox>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checkbox1: 'item4',
            checkbox2: 'item4',
            checkbox3: 'item4',
            checkbox4: 'item4',
            checkbox5: 'item4',
            checkbox6: 'item4',
            checkbox7: 'item4'
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