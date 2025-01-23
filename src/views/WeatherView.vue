<template>
  <div class="weather-view">
    <h1>Weather Details</h1>
    <table>
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
  </div>
</template>

<script>
export default {
  name: 'WeatherView',
  data() {
    return {
      temperature: 'Loading...',
      condition: 'Loading...',
      humidity: 'Loading...',
      windSpeed: 'Loading...',
    }
  },
  async mounted() {
    try {
      const response = await fetch('https://api.example.com/weather/details')
      const data = await response.json()
      this.temperature = data.temperature
      this.condition = data.condition
      this.humidity = data.humidity
      this.windSpeed = data.windSpeed
    } catch (error) {
      this.temperature = 'Error'
      this.condition = 'Error'
      this.humidity = 'Error'
      this.windSpeed = 'Error'
    }
  },
}
</script>

<style scoped>
.weather-view {
  /* Add your styles here */
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
</style>
