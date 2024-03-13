import { createRouter, createWebHistory } from 'vue-router'
import { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: '/scratch',
      component: () => import('@/views/HomeView/index.vue')
    },
    {
      path: '/limbo',
      name: 'LimboView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/LimboView/index.vue')
    },
    {
      path: '/scratch',
      name: 'ScratchView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ScratchView/index.vue')
    },

    {
      path: '/scratch-single',
      name: 'ScratchViewSingle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ScratchViewSingle/index.vue')
    },

  ]
})

export async function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  // 路由准备就绪后挂载APP实例
  await router.isReady()
}

export default router
