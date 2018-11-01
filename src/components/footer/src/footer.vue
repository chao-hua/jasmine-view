<template>
    <footer class="js-footer" :style="{ height }">
        <slot></slot>
    </footer>
</template>
<script>
export default {
    name: 'JsFooter',
    componentName: 'JsFooter',
    props: {
        height: {
            type: String,
            default: '60px'
        }
    }
};
</script>