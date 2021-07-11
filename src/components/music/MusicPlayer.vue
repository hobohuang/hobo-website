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
      <li class="vloume" @click="banOrPlayVolume">
        <el-popover
          placement="bottom"
          :width="200"
          :offset="30"
          :hide-after="500"
          trigger="hover"
        >
          <template #reference>
            <font-awesome-icon :icon="['fa', volumeIcon]" />
          </template>
          <el-slider v-model="volumeNumber" :disabled="!isVolume"></el-slider>
        </el-popover>
      </li>
      <li class="last">
        <font-awesome-icon :icon="['fa', 'step-backward']" />
      </li>
      <li class="play" @click="palyOrPause">
        <font-awesome-icon :icon="['fa', playIcon]" />
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
    let isPlay = ref(true);
    let isVolume = ref(true);
    let perVolumeNumber = ref(0);
    let volumeNumber = ref(0);

    const showMusicTool = () => {
      isShowMusicInfo.value = false;
    };
    const showMusicInfo = () => {
      isShowMusicInfo.value = true;
    };
    const palyOrPause = () => {
      isPlay.value = !isPlay.value;
    };
    const banOrPlayVolume = () => {
      isVolume.value = !isVolume.value;
      if (!isVolume.value) {
        perVolumeNumber.value = volumeNumber.value;
        volumeNumber.value = 0;
      } else {
        volumeNumber.value = perVolumeNumber.value;
      }
    };
    const playIcon = computed(() => {
      return isPlay.value ? "play-circle" : "pause-circle";
    });
    const volumeIcon = computed(() => {
      let icon = "volume-mute";
      if (isVolume.value) {
        if (volumeNumber.value == 0) {
          icon = "volume-off";
        } else if (volumeNumber.value < 50) {
          icon = "volume-down";
        } else {
          icon = "volume-up";
        }
      }
      return icon;
    });
    return {
      isShowMusicInfo,
      isPlay,
      isVolume,
      volumeNumber,
      perVolumeNumber,
      playIcon,
      volumeIcon,
      showMusicTool,
      showMusicInfo,
      palyOrPause,
      banOrPlayVolume,
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
      color: #808080;
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
      cursor: pointer;
    }
    li:hover {
      color: #1ed1a6;
    }
    .play {
      color: #1ed1a6;
      font-size: 28px;
    }
    .vloume,
    .music-list {
      font-size: 14px;
      color: #878787;
      width: 14px;
    }
  }
}
</style>
