import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    },
    {
      path: '/basic',
      component: () => import('@/views/basic/index.vue'),
      meta: { name: '基础' },
      children: [
        {
          path: 'ref',
          component: () => import('@/views/basic/Ref.vue'),
          meta: { name: '响应式基础' },
        },
        {
          path: 'computed',
          component: () => import('@/views/basic/Compute.vue'),
          meta: { name: '计算属性' },
        },
        {
          path: 'appStatus',
          component: () => import('@/views/basic/AppStatus.vue'),
          meta: { name: '生命周期' },
        },
        {
          path: 'pageComponent',
          component: () => import('@/views/basic/PageComponent.vue'),
          meta: { name: '页面组件' },
        },
      ],
    },
    {
      path: '/api',
      component: () => import('@/views/api/index.vue'),
      meta: { name: 'API' },
      children: [
        {
          path: 'globalApi',
          component: () => import('@/views/api/GlobalAPI.vue'),
          meta: { name: '全局API' },
        },
        {
          path: 'groupApi',
          component: () => import('@/views/api/GroupAPI.vue'),
          meta: { name: '组合式API' },
        },
        {
          path: 'contentApi',
          component: () => import('@/views/api/ContextAPI.vue'),
          meta: { name: '内置内容' },
        },
        {
          path: 'componentApi',
          component: () => import('@/views/api/ComponentAPI.vue'),
          meta: { name: '单文件组件' },
        },
      ],
    },
    {
      path: '/pinia',
      component: () => import('@/views/pinia/index.vue'),
      meta: { name: '状态管理' },
      children: [
        {
          path: 'store',
          component: () => import('@/views/pinia/Use.vue'),
          meta: { name: '使用' },
        },
        {
          path: 'concept',
          component: () => import('@/views/pinia/Concept.vue'),
          meta: { name: '核心概念' },
        },
      ],
    },
  ],
})

export default router
