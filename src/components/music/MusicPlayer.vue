<!--  -->
<template>
  <div
    class="music-player"
    @mouseenter="showMusicTool"
    @mouseleave="showMusicInfo"
  >
    <img src="../../assets/headPic.png" class="music-pic" />
    <div class="music-info" v-show="isShowMusicInfo">
      <span class="song">歌曲名</span>
      <span class="singer">演唱者</span>
    </div>
    <ul class="option-tool" v-show="!isShowMusicInfo">
      <li class="vloume">
        <font-awesome-icon :icon="['fa', 'volume-up']" />
      </li>
      <li class="last">
        <font-awesome-icon :icon="['fa', 'step-backward']" />
      </li>
      <li class="play">
        <font-awesome-icon :icon="['fa', 'play-circle']" />
      </li>
      <li class="next">
        <font-awesome-icon :icon="['fa', 'step-forward']" />
      </li>
      <li class="music-list">
        <font-awesome-icon :icon="['fa', 'list']" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "musicPlayer",
  setup() {
    let isShowMusicInfo = ref(true);
    const showMusicTool = () => {
      isShowMusicInfo.value = false;
    };
    const showMusicInfo = () => {
      isShowMusicInfo.value = true;
    };
    return {
      isShowMusicInfo,
      showMusicTool,
      showMusicInfo,
    };
  },
});
</script>
<style lang="scss" scoped>
.music-player {
  position: fixed;
  top: 70px;
  left: 10px;
  z-index: 2;

  height: 75px;
  width: 330px;
  background: #fff;
  border-radius: 10px;

  box-shadow: 2px 2px 5px #ccc;
  .music-pic {
    position: absolute;
    top: -20%;
    left: 10px;

    height: 65px;
    width: 65px;
    border: 2px #bbb solid;
    border-radius: 50%;
  }
  .music-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    padding: 0 0 0 85px;
    height: 100%;
    height: 100%;

    .song {
      font-size: 14px;
    }
    .singer {
      margin-top: 5px;
      font-size: 14px;
      color: #999;
    }
  }
  .option-tool {
    display: flex;
    justify-content: space-around;
    align-items: center;

    box-sizing: border-box;
    padding: 0 40px 0 85px;
    height: 100%;
    height: 100%;

    li {
      margin: 5px;
      font-size: 18px;
    }
    .play {
      color: #1ed1a6;
      font-size: 28px;
    }
    .vloume,
    .music-list {
      font-size: 14px;
    }
  }
}
</style>
