import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Index from './components/index.vue'
import CourseDetail from './components/courseDetail.vue'
import InterviewDetail from './components/interviewDetail.vue'
import Exam from './components/exam.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/exam/:id',
      name: 'exam',
      component: Exam
    },
    {
      path: '/interviewdetail/:id',
      name: 'InterviewDetail',
      component: InterviewDetail
    },
    {
      path: '/coursedetail/:id',
      name: 'CourseDetail',
      component: CourseDetail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'regster',
      component: Register
    },
    {
      path: '/',
      name: 'index',
      component: Index
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
