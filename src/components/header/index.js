import JsHeader from './src/header.vue';

JsHeader.install = function(Vue) {
    Vue.component(JsHeader.name, JsHeader)
}

export default JsHeader;