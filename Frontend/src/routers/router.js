import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Homepage from '../pages/Homepage.vue'
// import Formpage from '../views/Formpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/',
    //   name: 'homepage',
    //   component: Homepage
    // },
    // {
    //   path: '/form',
    //   name: 'form',
    //   component: Formpage
    // },
    // {
    //   path: '/edit/:id',
    //   name: 'edit',
    //   component: Formpage
    // },
  ]
})

export default router
