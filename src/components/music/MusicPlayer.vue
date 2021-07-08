<!--  -->
<template>
  <div class="music-player">
    <img src="../../assets/headPic.png" class="music-pic" />
    <div class="music-info" v-show="false">
      <span class="song">歌曲名</span>
      <span class="singer">演唱者</span>
    </div>
    <ul class="option-tool" v-show="true">
      <li class="like">
        <font-awesome-icon icon="heart" class="tool-icon" />
      </li>
      <li class="last">左</li>
      <li class="play">播放</li>
      <li class="next">右</li>
      <li class="music-list">列表</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "musicPlayer",
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
    }
    .like {
      color: #ff6a6a;
    }
  }
}
</style>
