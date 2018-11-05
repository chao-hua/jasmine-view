import JsRadio from './src/radio';

JsRadio.install = function(Vue) {
    Vue.component(JsRadio.name, JsRadio)
}

export default JsRadio;