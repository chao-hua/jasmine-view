<template>
    <header class="js-header" :style="{ height }">
        <slot></slot>
    </header>
</template>
<script>
export default {
    name: 'JsHeader',
    componentName: 'JsHeader',
    props: {
        height: {
            type: String,
            default: '60px'
        }
    }
};
</script>