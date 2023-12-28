import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail';
import CoachList from './pages/coaches/CoachList';
import CoachRegister from './pages/coaches/CoachRegister';
import ContactCoach from './pages/requests/ContactCoach';
import RequestReceive from './pages/requests/RequestReceive';
import NotFound from './pages/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: '/contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: RequestReceive },
    { path: '/:notFound(.*)', component: NotFound }, // site for uncorrect uri
  ],
});

export default router;
