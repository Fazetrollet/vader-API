<script setup>
import { ref, onMounted } from 'vue'
import CurrentWeather from './components/CurrentWeather.vue'
import WeeklyWeather from './components/WeeklyWeather.vue'
import VideoPlayer from './components/VideoPlayer.vue'

const darkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
const isLoading = ref(true)

onMounted(() => {
  document.body.classList.toggle('dark-mode', darkMode.value)
  // Simulate loading state
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.body.classList.toggle('dark-mode')
}
</script>

<template>
  <div class="app-container" :class="{ 'dark-mode': darkMode }">
    <header>
      <div class="header-content">
        <h1>Åland Weather</h1>
        <div class="header-controls">
          <span class="location">📍 Mariehamn</span>
          <button class="theme-toggle" @click="toggleDarkMode" aria-label="Toggle dark mode">
            {{ darkMode ? '☀️' : '🌙' }}
          </button>
        </div>
      </div>
    </header>

    <main>
      <div class="grid-layout" :class="{ 'is-loading': isLoading }">
        <div class="weather-card">
          <Transition name="fade">
            <CurrentWeather v-if="!isLoading" />
            <div v-else class="skeleton-loader"></div>
          </Transition>
        </div>

        <div class="weather-card">
          <Transition name="fade">
            <WeeklyWeather v-if="!isLoading" />
            <div v-else class="skeleton-loader"></div>
          </Transition>
        </div>

        <div class="weather-card video-container">
          <VideoPlayer videoId="y0ChIkyJavE" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100dvh;
  background: var(--bg-color, #f5f5f5);
  transition: background-color 0.3s ease;
}

header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: env(safe-area-inset-top) env(safe-area-inset-right) 1rem env(safe-area-inset-left);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-content {
  max-width: min(90%, 1400px);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.2s ease;
}

main {
  padding: 1rem;
  max-width: min(90%, 1400px);
  margin: 0 auto;
}

.grid-layout {
  display: grid;
  gap: 1.5rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
}

.weather-card {
  background: var(--section-bg, white);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.video-container {
  grid-column: 1 / -1;
}

@media (max-width: 768px) {
  .header-content {
    padding: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .grid-layout {
    gap: 1rem;
    padding: 0.5rem;
  }

  .weather-card {
    padding: 1rem;
  }
}

@media (min-width: 1024px) {
  .grid-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (hover: hover) {
  .weather-card:hover {
    transform: translateY(-2px);
  }

  .theme-toggle:hover {
    transform: scale(1.1);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}

@container (min-width: 600px) {
  .weather-card {
    padding: 2rem;
  }
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.location {
  font-size: 1rem;
  opacity: 0.9;
}

.skeleton-loader {
  height: 200px;
  background: linear-gradient(
    90deg,
    var(--section-bg) 25%,
    rgba(129, 129, 129, 0.1) 50%,
    var(--section-bg) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 12px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
