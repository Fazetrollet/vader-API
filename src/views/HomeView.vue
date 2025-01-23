<template>
  <div class="home-view">
    <h1>Welcome to the Weather App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/weather">Weather</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-view {
  text-align: center;
}

nav {
  margin-top: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}

nav a:hover {
  text-decoration: underline;
}
</style>
