<script setup>
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
