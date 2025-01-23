<template>
  <div class="current-result">
    <h2>Current Weather</h2>
    <p>{{ weather }}</p>
  </div>
</template>

<script>
export default {
  name: 'CurrentResult',
  props: {
    weather: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.current-result {
  /* Add your styles here */
}
</style>
