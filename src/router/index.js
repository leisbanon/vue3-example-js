import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        return {
          path: '/basic/ref',
        }
      }
    },
    {
      path: '/basic',
      component: () => import('@/views/basic/index.vue'),
      meta: { name: '基础' },
      children: [
        {
          path: 'ref',
          component: () => import('@/views/basic/Ref.vue'),
          meta: { name: '响应式基础' }
        },
        {
          path: 'computed',
          component: () => import('@/views/basic/Compute.vue'),
          meta: { name: '计算属性' }
        },
        {
          path: 'appStatus',
          component: () => import('@/views/basic/AppStatus.vue'),
          meta: { name: '生命周期' }
        },
        {
          path: 'pageComponent',
          component: () => import('@/views/basic/PageComponent.vue'),
          meta: { name: '页面组件' }
        },
      ],
    }
  ],
})

export default router
