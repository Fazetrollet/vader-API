<script setup>
import CurrentWeather from './components/CurrentWeather.vue'
import WeeklyWeather from './components/WeeklyWeather.vue'
import VideoPlayer from './components/VideoPlayer.vue'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="app-container">
    <header>
      <h1>Åland Weather</h1>
      <nav>
        <ul>
          <li @click="scrollToSection('current-section')">Today</li>
          <li @click="scrollToSection('weekly-section')">Week</li>
          <li @click="scrollToSection('video-section')">Live</li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="current-section" class="weather-section">
        <CurrentWeather />
      </section>

      <section id="weekly-section" class="weather-section">
        <WeeklyWeather />
      </section>

      <section id="video-section" class="weather-section">
        <VideoPlayer videoId="z7SiAaN4ogw" />
      </section>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background: #f5f5f5;
}

header {
  background: linear-gradient(135deg, #42b983, #369f6b);
  color: white;
  padding: 1rem;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  margin: 1rem 0;
}

nav li {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.weather-section {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
