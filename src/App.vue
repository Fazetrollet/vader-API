<script setup>
<script setup>
import CurrentWeather from './components/CurrentWeather.vue'
import WeeklyWeather from './components/WeeklyWeather.vue'
import VideoPlayer from './components/VideoPlayer.vue'

// Dummy refresh triggers can be handled inside each component via $emit (not shown) or via page refresh.
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li @click="scrollToSection('current-section')">Current Weather</li>
        <li @click="scrollToSection('weekly-section')">Weekly Weather</li>
        <li @click="scrollToSection('video-section')">Video</li>
      </ul>
    </nav>
    <h1>Weather App</h1>
  </header>

  <main>
    <section id="current-section">
      <CurrentWeather />
      <button @click="$refs.current?.$forceUpdate()">Refresh Current</button>
    </section>

    <section id="weekly-section">
      <WeeklyWeather />
      <button @click="$refs.weekly?.$forceUpdate()">Refresh Weekly</button>
    </section>

    <section id="video-section">
      <VideoPlayer videoId="y0ChIkyJavE" />
    </section>
  </main>
</template>

<style scoped>
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
  margin: 0;
  cursor: pointer;
}
nav li:hover {
  text-decoration: underline;
}
h1 {
  margin: 0.5rem 0;
}
main {
  margin: 2rem auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
section {
  background: #f7f7f7;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
button {
  display: block;
  margin: 1rem auto 0 auto;
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
import CurrentWeather from './components/CurrentWeather.vue'
import WeeklyWeather from './components/WeeklyWeather.vue'
</script>

<template>
  <header>
    <h1>Weather App</h1>
  </header>
  <main>
    <!-- Optionally keep controls if needed; otherwise remove -->
    <section>
      <CurrentWeather />
    </section>
    <section>
      <WeeklyWeather />
    </section>
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
section {
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
