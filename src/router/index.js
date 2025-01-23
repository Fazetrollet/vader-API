import { createRouter, createWebHistory } from 'vue-router'
import WeatherView from '../views/WeatherView.vue'

const routes = [
  {
    path: '/',
    name: 'Weather',
    component: WeatherView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
