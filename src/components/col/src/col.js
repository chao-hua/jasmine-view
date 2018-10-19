export default {
    name: 'JsCol',
    props: {
        tag: {
            type: String,
            default: 'div'
        },

    },
    computed: {
        style() {

        }
    },
    render(ce) {
        return ce(this.tag, {

        }, this.$slots.default);
    }
};