<template>
    <section class="js-layout" :class="{ 'is-vertical':isVertical }">
        <slot></slot>
    </section>
</template>
<script>
export default {
    name: 'JsLayout',
    componentName: 'JsLayout',
    props: {
        direction: {
            type: String
        }
    },
    computed: {
        isVertical() {
            if (this.direction === 'vertical') {
                return true;
            } else if (this.direction === 'horizontal') {
                return false;
            }
            return this.$slots && this.$slots.default ? this.$slots.default.some(item => {
                let tag = item.componentOptions && item.componentOptions.tag;
                return tag === 'js-header' || tag === 'js-footer';
            }) : false;
        }
    }
};
</script>