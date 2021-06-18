<template>
  <div class="top-nav">
    <a href="#" class="logo-nav">
      <img src="../assets/logo.png" alt="" class="logo" />
    </a>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "topNav",
  setup() {
    let activeIndex = ref("home");
    const handleSelect = (key: number, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    return {
      activeIndex,
      handleSelect,
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
  border-bottom: 1px solid #dcdfe6;
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
</style>
