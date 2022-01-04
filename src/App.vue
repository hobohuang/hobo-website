<template>
  <div class="app">
    <top-nav />
    <music-player :style="`left:${musicPlayerOffset}; transition:left 1s`" />
    <el-backtop :bottom="100">
      <div
        style="
          height: 100%;
          width: 100%;
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        "
      >
        UP
      </div>
    </el-backtop>
    <router-view />
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import topNav from "./components/TopNav.vue";
import MusicPlayer from "./components/music/MusicPlayer.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "app",
  components: {
    topNav,
    MusicPlayer,
  },
  setup() {
    const store = useStore();
    const musicPlayerOffset = computed(() => {
      if (store.state.isShowPlayer) {
        return "5px";
      } else {
        return "-330px";
      }
    });

    return {
      musicPlayerOffset,
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
