<template>
    <aside class="js-aside" :style="{ width: sideWidth }">
        <slot></slot>
    </aside>
</template>
<script>
import { oneOf, breakpointMap } from 'utils/util.js'
import { on, off } from 'utils/dom.js'
export default {
    name: 'JsAside',
    componentName: 'JsAside',
    props: {
        width: {
            type: String,
            default: '300px'
        },
        collapsedWidth: {
            type: String,
            default: '60px'
        },
        breakpoint: {
            type: String,
            validator(val) {
                return oneOf(val, ['xs', 'sm', 'md', 'lg', 'xl']);
            }
        },
        collapsible: Boolean
    },
    data() {
        return {
            mediaMatched: false
        };
    },
    computed: {
        sideWidth() {
            return this.breakpoint ? (this.mediaMatched ? this.collapsedWidth : this.width) : this.width;
        }
    },
    methods: {
        onWindowResize() {
            let matchMedia;
            if (window.matchMedia) {
                matchMedia = window.matchMedia;
            }
            let mediaMatched = this.mediaMatched;
            this.mediaMatched = matchMedia(`(max-width: ${breakpointMap[this.breakpoint]})`).matches;
            if (this.mediaMatched !== mediaMatched) {
                this.$emit('breakpointTrigger', this.mediaMatched);
            }
        }
    },
    mounted() {
        if (this.breakpoint !== undefined) {
            on(window, 'resize', this.onWindowResize);
        }
    },
    beforeDestroy() {
        if (this.breakpoint !== undefined) {
            off(window, 'resize', this.onWindowResize);
        }
    }
};
</script>