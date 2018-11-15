import JsInput from './src/input';

JsInput.install = function(Vue) {
    Vue.component(JsInput.name, JsInput)
}

export default JsInput;