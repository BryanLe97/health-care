import { createRouter, createWebHistory } from 'vue-router';
import TopPage from '../src/views/top-page';
import MyRecord from '../src/views/my-record';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...TopPage,
    ...MyRecord
  ]
});

export default router;