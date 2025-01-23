<script setup>
import { ref, onMounted } from 'vue'
import CurrentResult from './components/CurrentResult.vue'

const weather = ref('Sunny, 25°C')
const temperature = ref('25')
const condition = ref('Sunny')
const humidity = ref('60')
const windSpeed = ref('15')

const fetchWeather = async () => {
  try {
    const response = await fetch('https://api.example.com/weather')
    const data = await response.json()
    weather.value = `${data.condition}, ${data.temperature}°C`
    temperature.value = data.temperature
    condition.value = data.condition
    humidity.value = data.humidity
    windSpeed.value = data.windSpeed
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
  <header>
    <h1>Weather App</h1>
  </header>

  <main>
    <CurrentResult :weather="weather" />
    <table class="weather-table">
      <thead>
        <tr>
          <th>Temperature</th>
          <th>Condition</th>
          <th>Humidity</th>
          <th>Wind Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ temperature }}°C</td>
          <td>{{ condition }}</td>
          <td>{{ humidity }}%</td>
          <td>{{ windSpeed }} km/h</td>
        </tr>
      </tbody>
    </table>
    <div class="live-video">
      <h2>Live Weather in Mariehamn</h2>
      <video controls autoplay muted>
        <source src="https://www.youtube.com/watch?v=y0ChIkyJavE" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <button @click="refreshWeather">Refresh Weather</button>
  </main>
</template>

<style scoped>
header {
  text-align: center;
  margin-bottom: 2rem;
}

.weather-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.weather-table th, .weather-table td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
}

.live-video {
  margin-top: 20px;
}

.live-video video {
  width: 100%;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 8px;
}

button {
  display: block;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6b;
}
</style>
