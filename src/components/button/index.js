import JsButton from './src/button';

JsButton.install = function(Vue) {
    Vue.component(JsButton.name, JsButton)
}

export default JsButton;