import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    meta: {}
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      keepAlive: true,
      title: '首页'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/index.vue'),
    meta: {
      keepAlive: true,
      title: '用户'
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/auth/index.vue'),
    meta: {
      keepAlive: true,
      title: '登录'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router