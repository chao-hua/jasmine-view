import JsAside from './src/aside.vue';

JsAside.install = function(Vue) {
    Vue.component(JsAside.name, JsAside)
}

export default JsAside;