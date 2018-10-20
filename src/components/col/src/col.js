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

        return ce(this.tag, {
            class: ['js-col', ...classList],
            style
        }, this.$slots.default);
    }
};