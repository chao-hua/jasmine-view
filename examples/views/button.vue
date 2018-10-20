<template>
    <div id="button">
        <js-button @click="test">测试</js-button>
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