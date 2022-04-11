import { createRouter, createWebHistory } from 'vue-router'
import HomeMain from '../views/Home.vue'
import RefsVsReactive from '../views/RefsVsReactive.vue'
import Computed from '../views/Computed.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
