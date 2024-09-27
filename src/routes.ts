import HomePage from './pages/home.tsx';
import AboutPage from './pages/about.tsx';
import NotFoundPage from './pages/404.tsx';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;