<template>
  <div class="current-weather">
    <h1>Current Weather</h1>
    <table class="weather-table">
      <thead>
        <tr>
          <th>Date/Time</th>
          <th>Temperature (°C)</th>
          <th>Humidity (%)</th>
          <th>Pressure (hPa)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ formatDate(weather.datetime) }}</td>
          <td>{{ formatNumber(weather.temperature) }}</td>
          <td>{{ formatNumber(weather.humidity) }}</td>
          <td>{{ formatNumber(weather.pressure) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const weather = ref({
  datetime: '',
  temperature: 0,
  humidity: 0,
  pressure: 0
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleString()
}

const formatNumber = (num) => {
  return Number(num).toFixed(1)
}

onMounted(async () => {
  try {
    const response = await fetch('http://10.15.1.39/~60914/VaderApp-Backend/weather/now')
    weather.value = await response.json()
  } catch (error) {
    console.error('Error fetching current weather', error)
  }
})
</script>

<style scoped>
.current-weather {
  text-align: center;
  padding: 2rem;
  width: 80%;
  margin-bottom: 2rem;
}
.weather-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
.weather-table th,
.weather-table td {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  font-size: 1.2rem;
}
</style>
