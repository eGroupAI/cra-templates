import PrivateHome from 'pages/PrivateHome'
import publicRoutes from './public-routes';

export default [
  {
    component: PrivateHome,
    path: '/me'
  },
  ...publicRoutes
];
