<template>
  <div class="weather-view">
    <h1>Weather Details</h1>
    <p>Temperature: {{ temperature }}°C</p>
    <p>Condition: {{ condition }}</p>
    <p>Humidity: {{ humidity }}%</p>
    <p>Wind Speed: {{ windSpeed }} km/h</p>
    <div class="live-video">
      <h2>Live Weather in Mariehamn</h2>
      <video controls autoplay muted>
        <source src="https://example.com/mariehamn-live.mp4" type="video/mp4">
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
      windSpeed: 'Loading...'
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://api.example.com/weather/details');
      const data = await response.json();
      this.temperature = data.temperature;
      this.condition = data.condition;
      this.humidity = data.humidity;
      this.windSpeed = data.windSpeed;
    } catch (error) {
      this.temperature = 'Error';
      this.condition = 'Error';
      this.humidity = 'Error';
      this.windSpeed = 'Error';
    }
  }
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
