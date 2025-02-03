<template>
  <div class="video-player">
    <h1>Example Video</h1>
    <iframe
      :src="videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    videoId: {
      type: String,
      default: 'dQw4w9WgXcQ'
    }
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`
    }
  }
}
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
