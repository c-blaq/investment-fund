import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import DetailsView from '@/views/Details.vue'
import ErrorView from '@/views/Error.vue'
import NotFound from '@/views/NotFound.vue'

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
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView
    },
    {
      path: '/:catchAll(.*)',
      name: 'ErrorPage',
      component: NotFound
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
