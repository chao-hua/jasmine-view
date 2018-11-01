import JsLayout from './src/layout.vue';

JsLayout.install = function(Vue) {
    Vue.component(JsLayout.name, JsLayout)
}

export default JsLayout;