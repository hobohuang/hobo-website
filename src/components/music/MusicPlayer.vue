<!--  -->
<template>
  <div
    class="music-player"
    @mouseenter="showMusicTool"
    @mouseleave="showMusicInfo"
  >
    <img src="../../assets/headPic.png" class="music-pic" />
    <div class="music-info" v-show="showInfoOrTool">
      <span class="song">{{ curMusic.song }}</span>
      <span class="singer">{{ curMusic.singer }}</span>
    </div>
    <ul class="option-tool" v-show="!showInfoOrTool">
      <li class="vloume" @click="banOrPlayVolume">
        <el-popover
          placement="bottom"
          :width="200"
          :offset="30"
          :hide-after="500"
          trigger="hover"
          @show="isPreventShowInfo = true"
          @hide="isPreventShowInfo = false"
        >
          <template #reference>
            <font-awesome-icon :icon="['fa', volumeIcon]" />
          </template>
          <el-slider
            v-model="volumeNumber"
            :disabled="!isVolume"
            @input="changeVolume"
          ></el-slider>
        </el-popover>
      </li>
      <li class="last" @click="switchMusic(-1)">
        <font-awesome-icon :icon="['fa', 'step-backward']" />
      </li>
      <li class="play" @click="palyOrPause">
        <font-awesome-icon :icon="['fa', playIcon]" />
      </li>
      <li class="next" @click="switchMusic(1)">
        <font-awesome-icon :icon="['fa', 'step-forward']" />
      </li>
      <li class="music-list-icon" @click="showOrhiddenList">
        <font-awesome-icon :icon="['fa', 'list']" />
      </li>
    </ul>
    <div class="music-list" v-show="isShowMusicList">
      <el-scrollbar>
        <div
          class="list-item"
          v-for="item in musicList"
          :key="item.id"
          :class="{ curmusic: item.id === curMusicID }"
          @dblclick="changeCurMsuicID(item.id)"
        >
          <span>{{ item.song }}</span>
          <span>-</span>
          <span>{{ item.singer }}</span>
          <span v-show="item.id === curMusicID">
            <font-awesome-icon :icon="['fa', 'headphones']" />
          </span>
          <!-- <i>icon</i> -->
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts">
// 歌名或者歌手名过长省略显示。。。
// 打开音乐列表自动定位到正在播放的歌曲的位置
// 对volume 数值更改后存到localstorge
import { defineComponent } from "vue";
import { musicController } from "@/hooks/components/musicPlay";
export default defineComponent({
  name: "musicPlayer",
  setup() {
    const {
      curMusicID,
      musicList,
      curMusic,
      volumeNumber,
      showInfoOrTool,
      playIcon,
      volumeIcon,
      isPlay,
      isVolume,
      isPreventShowInfo,
      isShowMusicList,
      palyOrPause,
      upDataMusicSrc,
      switchMusic,
      banOrPlayVolume,
      changeVolume,
      changeCurMsuicID,
      showMusicTool,
      showMusicInfo,
      showOrhiddenList,
    } = musicController();
    return {
      musicList,
      isPreventShowInfo,
      isPlay,
      isVolume,
      isShowMusicList,
      volumeNumber,
      curMusicID,
      curMusic,
      playIcon,
      volumeIcon,
      showInfoOrTool,
      showMusicTool,
      showMusicInfo,
      palyOrPause,
      banOrPlayVolume,
      showOrhiddenList,
      changeVolume,
      changeCurMsuicID,
      upDataMusicSrc,
      switchMusic,
    };
  },
});
</script>
<style lang="scss" scoped>
.music-player {
  position: fixed;
  top: 70px;
  left: 5px;
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
    .curmusic {
      color: #1ed1a6;
    }
  }
}
</style>
