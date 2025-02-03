<template>
  <div class="video-player">
    <h1>Example Video</h1>
    <iframe
      :src="videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe> <!-- Fixed missing end tag -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  videoId: {
    type: String,
    default: 'dQw4w9WgXcQ'
  }
})
const videoUrl = computed(() => `https://www.youtube.com/embed/${props.videoId}`)
</script>

<style scoped>
.video-player {
  text-align: center;
  padding: 2rem;
  width: 80%;
  margin: 0 auto 2rem auto;
}
.video-player iframe {
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
</style>
