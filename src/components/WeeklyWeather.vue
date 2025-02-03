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
          <td>{{ formatDate(reading.datetime || reading.datetimefrom) }}</td>
          <td>{{ formatNumber(reading.temperature) }}</td>
          <td>{{ formatNumber(reading.humidity) }}</td>
          <td>{{ formatNumber(reading.pressure) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const weeklyData = ref([])

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleString()
}

const formatNumber = (num) => {
  return Number(num).toFixed(1)
}

onMounted(async () => {
  try {
    const today = new Date()
    const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)

    const datefrom = today.toISOString().split('T')[0]
    const dateto = weekFromNow.toISOString().split('T')[0]

    const response = await fetch(`http://10.15.1.39/~60914/VaderApp-Backend/weather/${datefrom}/${dateto}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        interval: 60,
        humidity: true,
        temperature: true,
        pressure: true
      })
    })

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
