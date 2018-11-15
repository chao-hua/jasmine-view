import Button from './components/button';
import ButtonGroup from './components/button-group';
import Row from './components/row';
import Col from './components/col';
import Aside from './components/aside';
import Layout from './components/layout';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Radio from './components/radio';
import RadioGroup from './components/radio-group';
import Checkbox from './components/checkbox';
import CheckboxGroup from './components/checkbox-group';
import Input from './components/input';

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
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Input,
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