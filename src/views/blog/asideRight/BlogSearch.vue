<template>
  <div class="blog-search">
    <el-input placeholder="请输入内容">
      <template #append>
        <el-button icon="el-icon-search"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "blogSearch",
});
</script>
<style lang="scss" scoped></style>
