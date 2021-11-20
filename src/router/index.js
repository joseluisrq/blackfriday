import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld.vue'
import Users from '../components/Users.vue'
import Preguntas from '../components/juegos/Preguntas.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/juegaconcersa/:id',
    name: 'Preguntas',
    component: Preguntas
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router