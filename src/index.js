import Button from './components/button';
import Row from './components/row';

const components = {
    Button,
    Row
};

const install = function(Vue) {
    if (install.installed) return;

    Object.keys(components).forEach(item => {
        Vue.component(components[item].name, components[item]);
    });

};

const JasmineView = {
    varsion: '0.0.1',
    install,
    ...components
}


export default JasmineView;