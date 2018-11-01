import Button from './components/button';
import ButtonGroup from './components/button-group';
import Row from './components/row';
import Col from './components/col';
import Aside from './components/aside';
import Layout from './components/layout';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

const components = {
    Button,
    ButtonGroup,
    Row,
    Col,
    Aside,
    Layout,
    Footer,
    Header,
    Main,
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