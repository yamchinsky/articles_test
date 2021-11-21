import { lazy } from 'react';

export const mainRoutes = [
 
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import('../pages/homePage/HomePage')),
    exact: true,
    isPrivate: true,
   
  },
  {
    name: 'CurrentArticle',
    path: '/article/:name',
    component: lazy(() => import('../pages/articlePage/ArticlePage')),
    exact: true,
    isPrivate: true,
    
  },

  // {
  //   name: 'NotFound',
  //   path: '',
  //   component: lazy(() => import('../pages/notFoundPage/NotFoundPage.js')),
  //   exact: true,
  //   redirectTo: 'null',
  //   isPrivate: false
  // }
];
