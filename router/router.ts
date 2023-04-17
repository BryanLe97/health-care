import { createRouter, createWebHistory } from 'vue-router';
import TopPage from '../views/top-page';

const router = createRouter({
  history: createWebHistory(),
  routes: [...TopPage]
});

export default router;