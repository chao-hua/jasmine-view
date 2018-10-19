export default {
    name: 'JsRow',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        gutter: Number,
        type: String,
        justify: {
            type: String,
            default: 'start',
            validator: function(v) {
                return ['start', 'end', 'center', 'space-between', 'space-around'].indexOf(v) !== -1
            }
        },
        align: {
            type: String,
            default: 'start',
            validator: function(v) {
                return ['start', 'end', 'center', 'baseline', 'stretch'].indexOf(v) !== -1;
            }
        }
    },
    computed: {
        style() {
            const s = {};
            if (this.gutter) {
                s.marginLeft = `-${this.gutter / 2}px`;
                s.marginRight = s.marginLeft;
            }
            return s;
        }
    },
    render(ce) {
        return ce(this.tag, {
            class: [
                'js-row',
                this.justify !== 'start' ? `is-justify-${this.justify}` : '',
                this.align !== 'start' ? `is-align-${this.align}` : '',
                { 'js-row--flex': this.type === 'flex' }
            ],
            style: this.style
        }, this.$slots.default);
    }
};