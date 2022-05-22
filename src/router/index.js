import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/loginView.vue'
import signUpView from '../views/signUpView.vue'
import cartView from '../views/cartView.vue'






const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LogIn',
    component: loginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: signUpView
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartView
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: [
//     //...
//   ],
// })

export default router
