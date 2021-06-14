import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Editor from '@/views/Editor.vue'
import Main from '@/views/Main.vue'
import Admin from '@/views/Admin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'main'
    }
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
