import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import DetailsView from '@/views/Details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:investmentName',
      name: 'investment-details',
      component: DetailsView
    }
  ]
})

export default router
