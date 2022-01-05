<template>
  <div class="blog-aside-left">
    <h2 class="left-title">分类</h2>
    <el-menu
      :default-active="activeIndex"
      mode="vertical"
      @select="handleSelect"
    >
      <el-menu-item index="0">全部</el-menu-item>
      <el-menu-item index="1">说说</el-menu-item>
      <el-submenu index="2">
        <template #title>文章</template>
        <el-menu-item index="2-1">全部</el-menu-item>
        <el-menu-item index="2-2">文章1</el-menu-item>
        <el-menu-item index="2-3">文章2</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>笔记</template>
        <el-menu-item index="3-1">全部</el-menu-item>
        <el-menu-item index="3-2">笔记1</el-menu-item>
        <el-menu-item index="3-3">笔记2</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "BlogAsideLeft",
  setup() {
    const activeIndex = ref("0");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    return {
      activeIndex,
      handleSelect,
    };
  },
});
</script>
<style lang="scss" scoped>
.blog-aside-left {
  background: #fff;
  .left-title {
    padding: 10px 16px;
  }
}
</style>
