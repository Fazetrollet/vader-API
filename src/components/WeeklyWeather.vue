<template>
  <div class="weekly-weather">
    <h1>Weekly Weather</h1>
    <table class="weather-table">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Temperature (°C)</th>
          <th>Humidity (%)</th>
          <th>Pressure (hPa)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="weeklyData">
          <td>{{ formatDate(weeklyData.datetimefrom) }}</td>
          <td>{{ formatDate(weeklyData.datetimeto) }}</td>
          <td>{{ formatNumber(weeklyData.temperature) }}</td>
          <td>{{ formatNumber(weeklyData.humidity) }}</td>
          <td>{{ formatNumber(weeklyData.pressure) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const weeklyData = ref(null)

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleString()
}

const formatNumber = (num) => {
  return typeof num === 'number' ? num.toFixed(1) : '0.0'
}

onMounted(async () => {
  try {

    /*
    const today = new Date()
    const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)

    
    const datefrom = today.toISOString().split('T')[0]
    const dateto = weekFromNow.toISOString().split('T')[0]
    */

    const url = `http://10.15.1.39/~60914/VaderApp-Backend/`
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(url, requestOptions)
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
