import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/book/list',
        name: 'BookList',
        component: () => import('../views/BookList.vue')
      },
      {
        path: '/book/chapter',
        name: 'BookChapter',
        component: () => import('../views/BookChapter.vue')
      },
      {
        path: '/book/content',
        name: 'BookContent',
        component: () => import('../views/BookContent.vue')
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(!sessionStorage.getItem('token') && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
