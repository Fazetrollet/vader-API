<template>
  <div class="weather-view">
    <h1>Weather Details</h1>
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
          <td>
            <img src="https://img.icons8.com/ios-filled/50/000000/thermometer.png" alt="Temperature Icon" />
            {{ temperature }}°C
          </td>
          <td>
            <img src="https://img.icons8.com/ios-filled/50/000000/sun.png" alt="Condition Icon" />
            {{ condition }}
          </td>
          <td>
            <img src="https://img.icons8.com/ios-filled/50/000000/humidity.png" alt="Humidity Icon" />
            {{ humidity }}%
          </td>
          <td>
            <img src="https://img.icons8.com/ios-filled/50/000000/wind.png" alt="Wind Speed Icon" />
            {{ windSpeed }} km/h
          </td>
        </tr>
        <tr>
          <td>
            <img src="https://img.icons8.com/ios-filled/50/000000/thermometer.png" alt="Temperature Icon" />
            22°C
          </td>
          <td>
            <img src="https://img.icons8.com/ios-filled/50/000000/cloud.png" alt="Condition Icon" />
            Cloudy
          </td>
          <td>
            <img src="https://img.icons8.com/ios-filled/50/000000/humidity.png" alt="Humidity Icon" />
            65%
          </td>
          <td>
            <img src="https://img.icons8.com/ios-filled/50/000000/wind.png" alt="Wind Speed Icon" />
            10 km/h
          </td>
        </tr>
      </tbody>
    </table>
    <div class="live-video">
      <h2>Live Weather in Mariehamn</h2>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/y0ChIkyJavE"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherView',
  data() {
    return {
      temperature: '25',
      condition: 'Sunny',
      humidity: '60',
      windSpeed: '15',
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
      console.error('Error fetching weather data', error)
    }
  },
}
</script>

<style scoped>
.weather-view {
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

.weather-table img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 8px;
}

.live-video {
  margin-top: 20px;
}

.live-video iframe {
  width: 100%;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 8px;
}
</style>
