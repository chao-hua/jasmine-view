import JsMain from './src/main.vue';

JsMain.install = function(Vue) {
    Vue.component(JsMain.name, JsMain)
}

export default JsMain;