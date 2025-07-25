export const staticRoutes = [
  {
    name: 'default',
    path: '/',
    component: () => import('@/layouts/default.vue'),
    redirect: '/home'
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/views/login/index.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/error/[...error].vue'),
      },
    ],
  }
]