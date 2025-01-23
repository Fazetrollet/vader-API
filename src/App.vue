<script setup>
import { ref, onMounted } from 'vue'
import WeatherView from './views/WeatherView.vue'

const weather = ref('Loading...')

const fetchWeather = async () => {
  try {
    const response = await fetch('https://api.example.com/weather')
    const data = await response.json()
    weather.value = `${data.condition}, ${data.temperature}°C`
  } catch (error) {
    console.error('Error fetching weather data', error)
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
  <button @click="refreshWeather">Refresh Weather</button>
</template>

<style scoped></style>
