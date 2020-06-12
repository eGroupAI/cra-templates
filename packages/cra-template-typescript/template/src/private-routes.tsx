import publicRoutes from './public-routes';

import PrivateHome from 'pages/PrivateHome'

export default [
  {
    component: PrivateHome,
    path: '/me'
  },
  ...publicRoutes
];
