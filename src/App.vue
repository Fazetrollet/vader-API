<script setup>
import { ref, onMounted } from 'vue'
import WeatherView from './views/WeatherView.vue'


const weather = ref('Sunny, 25°C')
const temperature = ref('25')
const condition = ref('Sunny')
const humidity = ref('60')
const windSpeed = ref('15')
const selectedPlace = ref('Mariehamn')
const coordinates = ref({ lat: 60.0973, lon: 19.9344 })

const fetchWeather = async () => {
  try {
    const response = await fetch(`https://api.example.com/weather?lat=${coordinates.value.lat}&lon=${coordinates.value.lon}`)
    const data = await response.json()
    weather.value = `${data.condition}, ${data.temperature}°C`
    temperature.value = data.temperature
    condition.value = data.condition
    humidity.value = data.humidity
    windSpeed.value = data.windSpeed
  } catch (error) {
    console.error('Error fetching weather data', error)
  }
}

const refreshWeather = () => {
  fetchWeather()
}

onMounted(() => {
  fetchWeather()
})
</script>

<template>
  <header>
    <h1>Weather App</h1>
  </header>

  <main>
    <div class="controls">
      <label for="place-select">Select Place:</label>
      <select id="place-select" v-model="selectedPlace" @change="refreshWeather">
        <option value="Mariehamn">Mariehamn</option>
        <option value="Helsinki">Helsinki</option>
        <option value="Stockholm">Stockholm</option>
      </select>
      <label for="coordinates">Or Enter Coordinates:</label>
      <input id="coordinates" type="text" v-model="coordinates.lat" placeholder="Latitude" />
      <input id="coordinates" type="text" v-model="coordinates.lon" placeholder="Longitude" />
      <button @click="refreshWeather">Refresh Weather</button>
    </div>
    <WeatherView id="current-weather" />
    <WeeklyWeather />
  </main>
</template>

<style scoped>
header {
  text-align: center;
  margin-bottom: 2rem;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls {
  margin-bottom: 2rem;
  text-align: center;
}

.controls label {
  margin-right: 1rem;
  font-weight: bold;
}

.controls select,
.controls input {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 1rem;
}

button {
  display: block;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6b;
}
</style>
