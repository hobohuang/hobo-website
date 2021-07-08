<template>
  <div class="app">
    <top-nav />
    <music-player />
    <router-view />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import topNav from "./components/TopNav.vue";
import MusicPlayer from "./components/music/MusicPlayer.vue";
export default defineComponent({
  name: "app",
  components: {
    topNav,
    MusicPlayer,
  },
  setup() {
    return {
      drawer: ref(false),
    };
  },
});
</script>

<style lang="scss" scoped>
.app {
  background: #f5f5f5;
  min-height: 100vh;
}
</style>
