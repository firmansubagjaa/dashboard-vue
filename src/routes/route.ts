import { createRouter, createWebHistory } from 'vue-router'
import {
  DashboardViewVue,
  EmployeeViewVue,
  LayoutViewVue,
  StatisticViewVue,
  TaskStatusViewVue,
  errorViewVue
} from '@/views'
import { AuthLayoutViewVue, LoginViewVue } from '@/views/AuthSection'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: LayoutViewVue,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        component: DashboardViewVue
      },
      {
        path: 'employee',
        component: EmployeeViewVue
      },
      {
        path: 'statistic',
        component: StatisticViewVue
      },
      {
        path: 'task-status',
        component: TaskStatusViewVue
      }
    ]
  },
  {
    path: '/',
    component: AuthLayoutViewVue,
    children: [
      {
        path: 'login',
        component: LoginViewVue
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    component: errorViewVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    next('login')
  } else if (localStorage.getItem('token') && to.path === '/login') {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
