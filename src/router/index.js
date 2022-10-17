import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotificationView from '@/views/NotificationView'
import MapView from '@/views/MapView'
import ChartsView from '@/views/ChartsView'
import AllUsersView from '@/views/AllUsersView'
import AddUserView from '@/views/AddUserView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationView
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/charts',
    name: 'charts',
    component: ChartsView
  },
  {
    path: '/allusers',
    name: 'allusers',
    component: AllUsersView
  },
  {
    path: '/adduser',
    name: 'adduser',
    component: AddUserView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
