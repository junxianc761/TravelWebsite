export const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/travelfood',
    component: () => import('@/views/travelfood/TravelfoodList.vue'),
  },
]
