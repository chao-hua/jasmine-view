export default {
    methods: {
        // 向最近的指定父组件发送事件
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            while (parent) {
                if (parent.$options.componentName !== componentName) {
                    parent = parent.$parent;
                } else {
                    parent.$emit.apply(parent, [eventName, ...[params]]);
                    return;
                }
            }
        },
    }
}