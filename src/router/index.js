import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/views/Start.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
