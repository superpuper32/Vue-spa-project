import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Users from '@/views/Users.vue'
import EditUser from '@/views/EditUser.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/edit/:id',
      component: EditUser
    }
  ]
})

export default router
