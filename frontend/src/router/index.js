import { createRouter, createWebHashHistory } from 'vue-router'
import Signup from '../components/Signup.vue'
import PasswordForgot from '../components/PasswordForgot.vue'
import SignupSuccess from '../components/SignupSuccess.vue'
import Login from '../components/Login.vue'
import AllArticles from '../components/AllArticles.vue'
import CreateComment from '../components/CreateComment.vue'
import Account from '../components/Account.vue'
import AccountDelete from '../components/AccountDelete.vue'
import AllAccounts from '../components/AllAccounts.vue'
import Error from '../components/Error.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },

  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },

  {
    path: '/success',
    name: 'signupSuccess',
    component: SignupSuccess
  },

  {
    path: '/contact',
    name: 'passwordForgot',
    component: PasswordForgot
  },

  {
    path: '/articles',
    name: 'allArticles',
    component: AllArticles
  },

  {
    path: '/articles/:id',
    name: 'createComment',
    component: CreateComment
  },

  {
    path: '/account',
    name: 'account',
    component: Account
  },

  {
    path: '/delete',
    name: 'accountDelete',
    component: AccountDelete
  },

  {
    path: '/accounts/:id',
    name: 'accounts',
    component: AllAccounts
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: Error
  },
]

//on crée le router avec toutes les routes qui correspondra à router-view
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
