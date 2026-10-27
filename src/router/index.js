
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Votacio from '../components/Votacio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/votacions',
      name: 'votacions',
      component: Votacio,
    },
  ],
})

export default router
