import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // { path: '/', component: () => import('../views/Home.vue') },
  // { path: '/:pathMatch(.*)*', redirect: '/' },
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/success',
        name: 'success',
        component: () => import('../views/success.vue'),
      },
      {
        path: '/fail',
        name: 'fail',
        component: () => import('../views/fail.vue'),
      },
      {
        path: '/settings',
        name: 'settings',
        redirect: '/index',
        component: () => import('../views/settings.vue'),
        children: [
          {
            path: '/index',
            name: 'index',
            component: () => import('../views/settings/index.vue'),
          },
          {
            path: '/security',
            name: 'security',
            component: () => import('../views/settings/Security.vue'),
          },
          {
            path: '/binding',
            name: 'binding',
            component: () => import('../views/settings/Binding.vue'),
          },
          {
            path: '/notification',
            name: 'notification',
            component: () => import('../views/settings/notification.vue'),
          },
        ],
      },
    ],
  },
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior: (to, _, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})
