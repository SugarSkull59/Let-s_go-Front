import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from "../views/Auth.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Account from "../views/Account.vue";
import Profile from "../views/Profile.vue";
import Workout from "../views/Workout.vue";




Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/myAccount",
    name: "Account",
    component: Account
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/workout",
    name: "Workout",
    component: Workout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
