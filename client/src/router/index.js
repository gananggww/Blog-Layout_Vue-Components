import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Blog from '@/components/Blog'
import Blogid from '@/components/Blogid'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    }, {
      path: '/admin',
      component: Admin
    }, {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '',
        component: Blog
      }, {
        path: ':id',
        component: Blogid,
        props: true
      }]
    }
  ]
})
