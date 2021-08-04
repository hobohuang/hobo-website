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
  /*
   * 音乐播放器基本功能控制
   */
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
  // 音乐播放器控制事件(播放或者暂停)
  const palyOrPause = () => {
      if (isPlay.value) {
        musicPause();
      } else {
        musicPlay();
      }
    };
  //更新音乐链接地址
  const upDataMusicSrc = (src: string) => {
    musicPlayer.src = src;
  }
  // 切换歌曲 mode = -1为上一曲,mode = 1 为下一曲
  const switchMusic = (mode: number)=>{
    curMusicID.value = (curMusicID.value + musicList.value.length + mode) % musicList.value.length;
    console.log("切歌");
  }
  //列表切歌事件 
  const changeCurMsuicID = (id: number) => {
    curMusicID.value = id;
  };

  /*
   * 音量相关控制
   */

  const isVolume = ref<boolean>(true);//是否静音标志，true为不静音，false为静音。
  const volumeNumber = ref<number>(100);//音量
  const perVolumeNumber = ref<number>(0);//记录上次静音前音量
  //静音或者取消静音事件
  const banOrPlayVolume = () => {
    isVolume.value = !isVolume.value;
    if (!isVolume.value) {
      perVolumeNumber.value = volumeNumber.value;
      volumeNumber.value = 0;
    } else {
      volumeNumber.value = perVolumeNumber.value;
    }
  };
  //更改音量事件
  const changeVolume = () => {
  musicPlayer.volume = volumeNumber.value / 100;
  };
  
  /*
   *视图相关控制
   */
  const isShowMusicInfo = ref(true);//显示音乐信息标志位
  const isPreventShowInfo = ref(false);//阻止显示音乐信息标志位，为防止其他事件需要阻止音乐信息显示保留的标志位
  const isShowMusicList = ref(false);//显示音乐列表标志位
  //显示工具栏控制事件
  const showMusicTool = () => {
    isShowMusicInfo.value = false;
  };
  //显示音乐信息控制事件
  const showMusicInfo = () => {
    isShowMusicInfo.value = true;
  };
  //显示或隐藏音乐列表控制事件
  const showOrhiddenList = () => {
    isShowMusicList.value = !isShowMusicList.value;
  };
  //显示音乐信息或者工具栏标志位(控制视图)
  const showInfoOrTool = computed(() => {
    if (isShowMusicInfo.value && !isPreventShowInfo.value) {
      return true;
    } else {
      return false;
    }
  });
  // 播放按钮或暂停按钮图标
  const playIcon = computed(() => {
    return isPlay.value ? "pause-circle" : "play-circle";
  });
  // 音量图标
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

  // 控制歌曲播放监控事件
  watch(curMusicID, (count: number) => {
    curMusic.value = musicList.value.filter((item) => item.id === count)[0];
    musicPlayer.src = curMusic.value.audio;
    console.log(isPlay.value);
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
    showOrhiddenList
  }
}

export {musicController}