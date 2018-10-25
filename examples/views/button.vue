<template>
    <div id="button">
        <js-button @click="test">测试1</js-button>
        <js-button >测试2</js-button>
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