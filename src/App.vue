<script setup>
import { ref, onMounted } from 'vue'
import WeatherView from './views/WeatherView.vue'
import CurrentResult from './components/CurrentResult.vue'

const weather = ref('Loading...')

const fetchWeather = async () => {
  try {
    const response = await fetch('https://api.example.com/weather')
    const data = await response.json()
    weather.value = `${data.condition}, ${data.temperature}°C`
  } catch (error) {
    weather.value = 'Error fetching weather data'
  }
}

const refreshWeather = () => {
  fetchWeather()
}

onMounted(() => {
  fetchWeather()
})
</script>

<template>
  <header></header>

  <WeatherView />
  <CurrentResult :weather="weather" />
  <button @click="refreshWeather">Refresh Weather</button>
</template>

<style scoped></style>
