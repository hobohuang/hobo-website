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
      <li class="music-list-icon" @click="showOrhiddenList">
        <font-awesome-icon :icon="['fa', 'list']" />
      </li>
    </ul>
    <div class="music-list" v-show="isShowMusicList">
      <el-scrollbar>
        <div class="list-item" v-for="item in musicList" :key="item.id">
          <span>{{ item.song }}</span>
          <span>-</span>
          <span>{{ item.singer }}</span>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts">
// todo视图切换延时
// 样式争取和QQ音乐一样
// 歌名或者歌手名过长省略显示。。。
// 列表显示正在播放歌曲标记与其他相区别
import { computed, defineComponent, ref } from "vue";
import { musicInfoList } from "./music";
export default defineComponent({
  name: "musicPlayer",
  setup() {
    const musicList = ref([...musicInfoList]);

    let isShowMusicInfo = ref(true);
    let isPlay = ref(true);
    let isVolume = ref(true);
    let isShowMusicList = ref(false);
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
    const showOrhiddenList = () => {
      isShowMusicList.value = !isShowMusicList.value;
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
      musicList,
      isShowMusicInfo,
      isPlay,
      isVolume,
      isShowMusicList,
      volumeNumber,
      perVolumeNumber,
      playIcon,
      volumeIcon,
      showMusicTool,
      showMusicInfo,
      palyOrPause,
      banOrPlayVolume,
      showOrhiddenList,
    };
  },
});
</script>
<style lang="scss" scoped>
.music-player {
  position: fixed;
  top: 70px;
  left: 10px;
  z-index: 10;

  height: 75px;
  width: 330px;
  background: #fff;

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
    .music-list-icon {
      font-size: 14px;
      color: #878787;
      width: 14px;
    }
  }
  .music-list {
    position: absolute;
    left: 0;
    bottom: -200px;
    z-index: -10;

    width: 330px;
    height: 200px;
    background: #fefefe;
    box-shadow: 2px 2px 5px #ccc;

    .list-item {
      box-sizing: border-box;
      height: 50px;
      line-height: 50px;
      padding: 0 10px;
      font-size: 14px;
      cursor: pointer;
      span {
        margin: 0 5px;
      }
    }
    .list-item:hover {
      color: #1ed1a6;
    }
  }
}
</style>
