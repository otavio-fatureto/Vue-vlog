import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '@/components/login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: login
      
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'about',
    
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },
    {
      path: '/conte',
      nome: 'conte',
      component: () => import('../components/conteudo.vue')
    },
    
        
  ]
})

export default router
