import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Index from './components/index.vue'
import CourseDetail from './components/courseDetail.vue'
import InterviewDetail from './components/interviewDetail.vue'
import Exam from './components/exam.vue'
import User from './components/user.vue'
import UserStudy from './components/userStudy.vue'
import UserSettings from './components/userSettings.vue'
import ReSetPws from './components/resetPassword.vue'
import MyCourse from './components/myCourse.vue'
import Ranking from './components/ranking.vue'
import RankingOne from './components/common/ranking.vue'
import RankingTwo from './components/common/ranking.vue'
import RankingThree from './components/common/ranking.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 做题
    {
      path: '/exam',
      name: 'exam',
      component: Exam
    },
    // 面试
    {
      path: '/interviewdetail/:id',
      name: 'InterviewDetail',
      component: InterviewDetail
    },
    // 课程页
    {
      path: '/coursedetail/:id',
      name: 'CourseDetail',
      component: CourseDetail
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 注册
    {
      path: '/register',
      name: 'regster',
      component: Register
    },
    // 首页
    {
      path: '/',
      name: 'index',
      component: Index
    },
    // ranking page
    {
      path: '/ranking',
      component: Ranking,
      children: [
        {path: '/ranking/1',component: RankingOne},
        {path: '/ranking/2',component: RankingTwo},
        {path: '/ranking/3',component: RankingThree},
      ]
    },
    // 个人中心
    {
      path: '/user',
      redirect: '/user-study',
      component: User,
      children: [
        { path: '/user-study', component: UserStudy },
        { path: '/usersettings', component: UserSettings },
        { path: '/resetpassword', component: ReSetPws },
        { path: '/mycourse', component: MyCourse }
      ]
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
