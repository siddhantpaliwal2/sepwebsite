import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
const AsyncNotFound = () => import('./views/NotFound.vue');
const AsyncExecutives = () => import('./views/Executives.vue');
const AsyncActives = () => import('./views/Actives.vue');
const AsyncBruintank = () => import('./views/Bruintank.vue');
const AsyncRecruitment = () => import('./views/Recruitment.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/home',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/executives',
      name: 'executives',
      component: AsyncExecutives
    },
    {
      path: '/actives',
      name: 'actives',
      component: AsyncActives
    },
    {
      path: '/bruintank',
      name: 'bruintank',
      component: AsyncBruintank
    },
    {
      path: '/recruitment',
      name: 'recruitment',
      component: AsyncRecruitment
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
