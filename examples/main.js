import Vue from 'vue'
import App from './app.vue'
import router from './router'
import jasmineView from '@/index';
import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(jasmineView);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')