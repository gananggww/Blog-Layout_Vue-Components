import Vue from 'vue'
import Router from 'vue-router'
import House from '@/components/House'
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
      component: Admin,
      children: [{
        path: '',
        component: Blog
      }]
    }, {
      path: '/',
      component: House,
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
