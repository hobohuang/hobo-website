<template>
  <div class="app">
    <top-nav />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import topNav from "./components/TopNav.vue";
export default defineComponent({
  name: "app",
  components: {
    topNav,
  },
});
</script>

<style lang="scss" scoped>
.app {
  background: #f5f5f5;
  min-height: 100vh;
}
</style>
