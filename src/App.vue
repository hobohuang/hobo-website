<template>
  <div class="app">
    <!-- 唤醒el-drawer放入Vux中 -->
    <top-nav />
    <router-view />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import topNav from "./components/TopNav.vue";
export default defineComponent({
  name: "app",
  components: {
    topNav,
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
