import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import('../views/Tag.vue')
  },
  {
    path: '/animation',
    name: 'animation',
    component: () => import('../views/Animation.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
