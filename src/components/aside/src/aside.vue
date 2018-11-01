<template>
    <aside class="js-aside" :style="{ width }">
        <slot></slot>
    </aside>
</template>
<script>
export default {
    name: 'JsAside',
    componentName: 'JsAside',
    props: {
        width: {
            type: String,
            default: '300px'
        },
        breakpoint: {
            type: String
        }
    }
};
</script>