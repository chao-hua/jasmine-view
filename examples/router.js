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
            path: '/grid',
            name: 'grid',
            component: () =>
                import ('./views/grid.vue')
        },
        {
            path: '/layout',
            name: 'layout',
            component: () =>
                import ('./views/layout.vue')
        },
        {
            path: '/button',
            name: 'button',
            component: () =>
                import ('./views/button.vue')
        },
        {
            path: '/radio',
            name: 'radio',
            component: () =>
                import ('./views/radio.vue')
        },
        {
            path: '/checkbox',
            name: 'checkbox',
            component: () =>
                import ('./views/checkbox.vue')
        },
    ]
})