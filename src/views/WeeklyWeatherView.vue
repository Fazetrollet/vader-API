<template>
  <div class="weekly-weather-view">
    <h1>Weekly Weather</h1>
    <table class="weather-table">
      <thead>
        <tr>
          <th>Day</th>
          <th>Temperature</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in weeklyWeather" :key="day.date">
          <td>{{ day.date }}</td>
          <td>{{ day.temperature }}°C</td>
          <td>{{ day.condition }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'WeeklyWeatherView',
  data() {
    return {
      weeklyWeather: [
        { date: 'Monday', temperature: '22', condition: 'Cloudy' },
        { date: 'Tuesday', temperature: '24', condition: 'Sunny' },
        { date: 'Wednesday', temperature: '20', condition: 'Rainy' },
        { date: 'Thursday', temperature: '23', condition: 'Partly Cloudy' },
        { date: 'Friday', temperature: '25', condition: 'Sunny' },
        { date: 'Saturday', temperature: '21', condition: 'Windy' },
        { date: 'Sunday', temperature: '19', condition: 'Stormy' }
      ]
    }
  },
  async mounted() {
    try {
      const response = await fetch('https://api.example.com/weather/weekly')
      const data = await response.json()
      this.weeklyWeather = data
    } catch (error) {
      console.error('Error fetching weekly weather data', error)
    }
  }
}
</script>

<style scoped>
.weekly-weather-view {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(to right, #83a4d4, #b6fbff);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.weather-table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
}

.weather-table th,
.weather-table td {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  font-size: 1.2rem;
}
</style>
