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
          <td>{{ weather.datetime }}</td>
          <td>{{ weather.temperature }}</td>
          <td>{{ weather.humidity }}</td>
          <td>{{ weather.pressure }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const weather = ref({
  datetime: '',
  temperature: '',
  humidity: '',
  pressure: ''
})

onMounted(async () => {
  try {
    const response = await fetch('https://api.example.com/weather/now')
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
