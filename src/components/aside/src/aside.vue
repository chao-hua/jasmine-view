<template>
    <aside class="js-aside" :style="{ width }">
        {{clientWidth}}
        <slot></slot>
    </aside>
</template>
<script>
import { oneOf } from 'utils/util.js'
export default {
    name: 'JsAside',
    componentName: 'JsAside',
    props: {
        width: {
            type: String,
            default: '300px'
        },
        breakpoint: {
            type: String,
            validator(val) {
                return oneOf(val, ['p', 'xs', 'sm', 'md', 'lg', 'xl']);
            }
        },
        collapsible: Boolean
    },
    computed: {
        clientWidth() {
            return document.body.clientWidth;
        }
    }
};
</script>