import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChildApp from '../views/ChildApp.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/child/:appId/:pathMatch(.*)*',
    name: 'child',
    component: ChildApp,
    // children: [{
    //   path: '',
    //   component: ChildApp,
    // }]
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: PageNotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
