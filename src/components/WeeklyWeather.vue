<template>
  <div class="weekly-weather animate-in">
    <h2>Weekly Weather</h2>
    <div class="table-container">
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
    const response = await fetch('http://10.15.1.39/~60914/VaderApp-Backend', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    weeklyData.value = await response.json()
  } catch (error) {
    console.error('Error fetching weekly weather data:', error)
    weeklyData.value = null
  }
})
</script>

<style scoped>
.weekly-weather {
  text-align: center;
  padding: 2rem;
  width: 100%;
}

.table-container {
  overflow-x: auto;
  border-radius: var(--table-border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.weather-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: var(--section-bg);
}

.weather-table th {
  background: var(--table-header-bg);
  color: white;
  padding: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
}

.weather-table td {
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all var(--animation-duration) ease;
}

.weather-table tr:hover td {
  background: var(--table-row-hover);
}

.weather-table th:first-child {
  border-top-left-radius: var(--table-border-radius);
}

.weather-table th:last-child {
  border-top-right-radius: var(--table-border-radius);
}

.weather-table tr:last-child td:first-child {
  border-bottom-left-radius: var(--table-border-radius);
}

.weather-table tr:last-child td:last-child {
  border-bottom-right-radius: var(--table-border-radius);
}

@media (max-width: 768px) {
  .table-container {
    margin: 0 -1rem;
  }
}
</style>
