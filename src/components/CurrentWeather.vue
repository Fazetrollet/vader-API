<template>
  <div class="current-weather" :class="{ loading: !weather.temperature }">
    <h2>Current Weather</h2>
    <div class="weather-card-content">
      <div class="temperature-display">
        <span class="temp-number">{{ formatNumber(weather.temperature) }}°</span>
        <div class="weather-icon">
          {{ getWeatherIcon(weather.temperature) }}
        </div>
      </div>

      <div class="weather-details">
        <div class="detail-item">
          <span class="label">Humidity</span>
          <div class="value-wrapper">
            <span class="value">{{ formatNumber(weather.humidity) }}%</span>
            <div class="progress-bar" :style="`width: ${weather.humidity}%`"></div>
          </div>
        </div>

        <div class="detail-item">
          <span class="label">Pressure</span>
          <span class="value">{{ formatNumber(weather.pressure) }} hPa</span>
        </div>

        <div class="detail-item">
          <span class="label">Last Updated</span>
          <span class="value">{{ formatDate(weather.datetime) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const weather = ref({
  datetime: '',
  temperature: null,
  pressure: null,
  humidity: null
})

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleString()
}

const formatNumber = (num) => {
  return typeof num === 'number' ? num.toFixed(1) : '0.0'
}

const getWeatherIcon = (temp) => {
  if (temp === null) return '🌡️'
  if (temp <= 0) return '❄️'
  if (temp <= 10) return '🌥️'
  if (temp <= 20) return '☀️'
  return '🌡️'
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
    const data = await response.json()
    weather.value = data
  } catch (error) {
    console.error('Error fetching current weather:', error)
    weather.value = {
      datetime: new Date().toISOString(),
      temperature: 0,
      pressure: 0,
      humidity: 0
    }
  }
})
</script>

<style scoped>
.current-weather {
  background: var(--section-bg, white);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.weather-card-content {
  display: grid;
  gap: 2rem;
  padding: 1rem;
}

.temperature-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.temp-number {
  font-size: 4rem;
  font-weight: 700;
  color: var(--primary-color);
}

.weather-icon {
  font-size: 3rem;
}

.weather-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.label {
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
}

.value-wrapper {
  position: relative;
  width: 50%;
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background: var(--primary-color);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.loading {
  opacity: 0.7;
  pointer-events: none;
}

@media (max-width: 768px) {
  .temp-number {
    font-size: 3rem;
  }

  .weather-icon {
    font-size: 2rem;
  }
}
</style>
