<template>
  <div class="current-weather animate-in" :class="{ loading: !weather.temperature }">
    <h2>Current Weather</h2>
    <div class="weather-card-content">
      <div class="temperature-display" :class="{ 'pulse-animation': weather.temperature }">
        <span class="temp-number">{{ formatNumber(weather.temperature) }}°</span>
        <div class="weather-icon">
          {{ getWeatherIcon(weather.temperature) }}
        </div>
      </div>

      <div class="weather-details">
        <div class="detail-item" v-for="(item, index) in details" :key="index"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <span class="label">{{ item.label }}</span>
          <div class="value-wrapper">
            <span class="value">{{ item.value }}</span>
            <div v-if="item.progress" class="progress-bar"
                 :style="`width: ${item.progress}%`"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

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

const details = computed(() => [
  {
    label: 'Humidity',
    value: `${formatNumber(weather.value.humidity)}%`,
    progress: weather.value.humidity
  },
  {
    label: 'Pressure',
    value: `${formatNumber(weather.value.pressure)} hPa`
  },
  {
    label: 'Last Updated',
    value: formatDate(weather.value.datetime)
  }
])

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
  position: relative;
  padding: 2rem;
  background: rgba(66, 185, 131, 0.1);
  border-radius: 50%;
  margin: 2rem auto;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.temperature-display::after {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
  opacity: 0.5;
  animation: pulse 2s infinite;
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
  animation: fadeIn var(--animation-duration) ease-out forwards;
  opacity: 0;
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

.pulse-animation {
  animation: pulse 2s infinite;
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
