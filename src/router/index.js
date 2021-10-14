import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Basket',
    component: () => import('@/views/Basket'),
    meta: {
      pageTitle: 'basket.name',
      requiresLogin: false,
      permissions: null,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
