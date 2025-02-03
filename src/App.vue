<script setup>
<script setup>
import { ref } from 'vue'
import CurrentWeather from './components/CurrentWeather.vue'
import WeeklyWeather from './components/WeeklyWeather.vue'
import VideoPlayer from './components/VideoPlayer.vue'

const darkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

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
        <button class="theme-toggle" @click="toggleDarkMode">
          {{ darkMode ? '☀️' : '🌙' }}
        </button>
      </div>
      <nav>
        <ul>
          <li @click="scrollToSection('current-section')">Today</li>
          <li @click="scrollToSection('weekly-section')">Week</li>
          <li @click="scrollToSection('video-section')">Live</li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="grid-container">
        <section id="current-section" class="weather-section">
          <CurrentWeather />
        </section>

        <section id="weekly-section" class="weather-section">
          <WeeklyWeather />
        </section>

        <section id="video-section" class="weather-section full-width">
          <VideoPlayer videoId="y0ChIkyJavE" />
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background: var(--bg-color, #f5f5f5);
  transition: all 0.3s ease;
}

.dark-mode {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --section-bg: #2d2d2d;
  color: var(--text-color);
}

header {
  background: linear-gradient(135deg, #42b983, #369f6b);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

nav ul {
  display: flex;
  justify-content: center;
  gap: clamp(1rem, 4vw, 2rem);
  padding: 0;
  margin: 1rem 0;
  list-style: none;
}

nav li {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
}

nav li:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-items: start;
}

.weather-section {
  background: var(--section-bg, white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.weather-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.full-width {
  grid-column: 1 / -1;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  
  header {
    padding: 0.5rem;
  }
  
  nav ul {
    flex-wrap: wrap;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
