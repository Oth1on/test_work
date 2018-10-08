import store from '@/store'
import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'
import loginPage from './views/LoginPage.vue'
import registerPage from './views/RegisterPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      beforeEnter(to, from, next) {
        if (store.state.isLoggedIn) {
          next()
        } else {
          next('/login')
        }
      },
      path: '/',
      name: 'mainPage',
      component: () => import(/* webpackChunkName: "mainPage" */ './views/MainPage.vue')
    },
    {
      path: '/login',
      name: 'loginPage',
      component: () => import(/* webpackChunkName: "loginPage" */ './views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'registerPage',
      component: () => import(/* webpackChunkName: "registerPage" */ './views/RegisterPage.vue')
    }
  ]
})
