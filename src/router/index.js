import { createRouter, createWebHistory } from 'vue-router'
import HomeMain from '../views/Home.vue'
import RefsVsReactive from '../views/RefsVsReactive.vue'
import Computed from '../views/Computed.vue'
import Details from '../views/Details.vue'
import Watch from '../views/WatchAndWatchEffect.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeMain
  },
  {
    path: '/refs',
    name: 'refs',
    component: RefsVsReactive
  },
  {
    path: '/computed',
    name: 'computed',
    component: Computed
  }, 
  {
    path: '/watch',
    name: 'watch',
    component: Watch
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
