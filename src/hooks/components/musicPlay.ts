import { computed, defineComponent, onBeforeMount, ref, watch } from "vue";
import { musicInfoList } from "@/constant/music";

interface ICurMusic {
  id:number, 
  image: string,
  audio: string,
  song: string,
  album: string,
  singer: string,
}
//音乐播放器控制
function musicController() {
  const musicPlayer:HTMLAudioElement = new Audio();
  const isPlay = ref<boolean>(false);//音乐播放暂停的标志，true为播放，false为停止
  const curMusicID = ref(0);//当前音乐ID
  const musicList = ref([...musicInfoList]);//音乐信息列表
  const curMusic = ref<ICurMusic>();// 当前音乐信息
  // 初始化音乐信息列表
  onBeforeMount(() => {
    curMusic.value = musicList.value.filter(
    (item) => item.id === curMusicID.value
  )[0];
  musicPlayer.src = curMusic.value.audio;
  })
  // 音乐播放
  const musicPlay = () => {
      isPlay.value = true;
      musicPlayer.play();
  }
  // 音乐暂停
  const musicPause = () => {
      isPlay.value = false;
      musicPlayer.pause();
  }
  //更新音乐链接地址
  const upDataMusicSrc = (src: string) => {
      musicPlayer.src = src;
  }
  // 切换歌曲 mode = -1为上一曲,mode = 1 为下一曲
  const switchMusic = (mode: number)=>{
    curMusicID.value = (curMusicID.value + musicList.value.length + mode) % musicList.value.length;
  }

  // 控制歌曲播放监控事件
  watch(curMusicID, (count: number) => {
    curMusic.value = musicList.value.filter((item) => item.id === count)[0];
    musicPlayer.src = curMusic.value.audio;
    if (isPlay.value) {
      musicPlay();
    }
  });
  //一首歌播完自动切歌
  musicPlayer.onended = () => {
    console.log("一首歌结束");
    switchMusic(1);
  };
  return {
    curMusicID,
    isPlay,
    musicList,
    curMusic,
    musicPlay,
    musicPause,
    upDataMusicSrc,
    switchMusic,
  }
}

export {musicController}