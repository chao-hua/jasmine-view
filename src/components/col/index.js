import JsCol from './src/col';

JsCol.install = function(Vue) {
  Vue.component(JsCol.name, JsCol)
}

export default JsCol;
