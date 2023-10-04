import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Homepage from '../pages/Homepage.vue'
import Formpage from '../pages/Formpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/form',
      name: 'form',
      component: Formpage
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Formpage
    },
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
  ]
})

export default router
