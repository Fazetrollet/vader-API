<template>
  <div class="weekly-weather">
    <h1>Weekly Weather</h1>
    <table class="weather-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temperature (°C)</th>
          <th>Humidity (%)</th>
          <th>Pressure (hPa)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reading, index) in weeklyData" :key="index">
          <td>{{ new Date(reading.datetimefrom).toLocaleDateString() }}</td>
          <td>{{ reading.temperature }}</td>
          <td>{{ reading.humidity }}</td>
          <td>{{ reading.pressure }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const weeklyData = ref([])

onMounted(async () => {
  try {
    // Hardcoded date range and query parameters; adjust as needed.
    const datefrom = '2023-10-01'
    const dateto = '2023-10-07'
    const query = '?interval=15&humidity=true&temperature=true&pressure=true'
    const response = await fetch(`https://api.example.com/weather/${datefrom}/${dateto}${query}`)
    weeklyData.value = await response.json()
  } catch (error) {
    console.error('Error fetching weekly weather data', error)
  }
})
</script>

<style scoped>
.weekly-weather {
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
