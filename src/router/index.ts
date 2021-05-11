import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginComponent from '../views/login.vue'
import SignupComponent from '../views/signup.vue'
import EditorComponent from '../views/editor.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupComponent
  },
  {
    path: '/editor',
    name: 'editor',
    component: EditorComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
