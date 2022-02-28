import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

const router = new Router({ routes, linkActiveClass: '', mode: 'history' })
// const router = new Router({ routes, linkActiveClass: 'is-active' })

router.beforeEach((to, from, next) => {
	next()
})

Vue.use(Router)