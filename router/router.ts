import { createRouter, createWebHistory } from 'vue-router';
import TopPage from '../src/views/top-page';
import MyRecord from '../src/views/my-record';
import ColumnPage from '../src/views/column-page';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...TopPage,
    ...MyRecord,
    ...ColumnPage
  ]
});

export default router;