import { createRouter, createWebHistory } from '@ionic/vue-router';
import LoginPage from '../views/LoginPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: LoginPage
  },
  {
    path: '/market-list',
    component: () => import('../components/MarketList.vue')
  },
  {
    path: '/menu/:marketId',
    name: 'MarketMenu',
    component: () => import('../components/MarketMenu.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
