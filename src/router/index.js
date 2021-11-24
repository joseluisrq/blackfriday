import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld.vue'
import Preguntas from '../components/juegos/Preguntas.vue'
import Curso from '../components/Curso.vue'
import Detallepack from '../components/Detallepack.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/juegaconcersa/:id',
    name: 'Preguntas',
    component: Preguntas
  },
  {
    path: '/curso/:id',
    name: 'Curso',
    component: Curso
  },
  {
    path: '/detalle/:id',
    name: 'Detallepack',
    component: Detallepack
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router