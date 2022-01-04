<template>
  <div class="top-nav">
    <div class="top-nav-left">
      <a href="#" class="logo-nav">
        <img src="../assets/logo.png" alt="" class="logo" />
      </a>
      <el-menu
        :default-active="$route.path"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <!-- 后期改成用数组驱动 -->
        <el-menu-item index="/home">主页</el-menu-item>
        <el-menu-item index="/blog">博客</el-menu-item>
        <el-menu-item index="/show">作品</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-menu>
    </div>
    <div class="top-nav-right">
      <button class="player-type" @click="changePlayerType">
        <i class="player-type-icon">
          <font-awesome-icon :icon="['fa', 'compact-disc']" />
        </i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { MODIFY_ISSHOWPLAYER } from "@/store/actionTypes";
import { defineComponent, ref } from "vue";
import { Store, useStore } from "vuex";

export default defineComponent({
  name: "topNav",
  setup() {
    const store: Store<any> = useStore();
    let activeIndex = ref("home");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const changePlayerType = () => {
      store.dispatch(MODIFY_ISSHOWPLAYER);
    };
    return {
      store,
      activeIndex,
      handleSelect,
      changePlayerType,
    };
  },
  // methods: {
  //   handleSelect(key: number, keyPath: number[]) {
  //     console.log(key, keyPath);
  //   },
  // },
});
</script>

<style lang="scss" scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dcdfe6;
  background: #fff;
}
.top-nav-left,
.top-nav-right {
  display: flex;
}
.logo-nav {
  height: 60px;
  line-height: 60px;
  margin-bottom: 1px;

  .logo {
    height: 30px;
    padding: 0 15px;
  }
}
.player-type {
  margin: 25% 15px 25% 15px;
  height: 30px;
  width: 30px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}
.player-type:hover {
  background-color: #eee;
}
.player-type-icon {
  font-size: 24px;
}
//去除element nav下划线
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
</style>
