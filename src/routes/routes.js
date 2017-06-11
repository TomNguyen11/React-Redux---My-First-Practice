import {
  Home,
  Products,
  Categories,
  NoMatch
} from '../containers/pages/';

import App from '../containers/App';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/products',
        component: Products
      },
      {
        path: '/categories',
        component: Categories
      },
      {
        component: NoMatch
      }
    ]
  }
];

export default routes;