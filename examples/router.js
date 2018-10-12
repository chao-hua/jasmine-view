import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/button',
            name: 'button',
            component: () =>
                import ('./views/button.vue')
        },
        {
            path: '/row',
            name: 'row',
            component: () =>
                import ('./views/row.vue')
        },
    ]
})