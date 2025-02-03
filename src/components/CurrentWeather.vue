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

<script>
export default {
  name: 'CurrentWeather',
  data() {
    return {
      weather: {
        datetime: '',
        temperature: '',
        humidity: '',
        pressure: ''
      }
    }
  },
  async mounted() {
    try {
      const response = await fetch('https://api.example.com/weather/now')
      const data = await response.json()
      this.weather = data
    } catch (error) {
      console.error('Error fetching current weather', error)
    }
  }
}
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
