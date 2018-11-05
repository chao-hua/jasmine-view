export default {
    name: 'JsCol',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24
        },
        offset: Number,
        pull: Number,
        push: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
        xxl: [Number, Object],
    },
    computed: {
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.componentName !== 'JsRow') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        }
    },
    render(ce) {
        let style = {},
            classList = [];
        if (this.gutter) {
            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }
        ['span', 'offset', 'pull', 'push'].forEach(item => {
            if (this[item] || this[item] === 0) {
                classList.push(
                    item !== 'span' ?
                    `js-col-${item}-${this[item]}` :
                    `js-col-${this[item]}`
                );
            }
        });

        ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(item => {
            if (typeof this[item] === 'number') {
                classList.push(`js-col-${item}-${this[item]}`);
            } else if (typeof this[item] === 'object') {
                let props = this[item];
                Object.keys(props).forEach(prop => {
                    classList.push(
                        prop !== 'span' ?
                        `js-col-${item}-${prop}-${props[prop]}` :
                        `js-col-${item}-${props[prop]}`
                    );
                });
            }
        });

        return ce(this.tag, {
            class: ['js-col', ...classList],
            style
        }, this.$slots.default);
    }
};