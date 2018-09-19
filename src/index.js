import Button from './components/button';

const components = {
    Button,
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