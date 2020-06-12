import React from 'react';

import { Redirect } from 'react-router-dom';
import Home from 'pages/Home'

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    path: '/*',
    render: () => <Redirect to="/" />
  }
];
