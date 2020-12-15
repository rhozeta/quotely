import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Jobs from '../views/Jobs.vue'
import Quote from '../views/Quote.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
   
  },
  {
    path: '/quote',
    name: 'Quote',
    component: Quote
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
