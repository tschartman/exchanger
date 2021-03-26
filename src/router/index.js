import Vue from 'vue'
import VueRouter from 'vue-router'
import Exchanges from '../views/Exchanges.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Exchanges',
    component: Exchanges
  },
  {
    path: '/exchange/:exchange',
    name: 'Exchange',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Exchange.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
