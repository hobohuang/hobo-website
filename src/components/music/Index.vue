<!--  -->
<template>
  <el-drawer
    class="music"
    title="我是标题"
    v-model="drawer"
    :with-header="false"
  >
    <span>我来啦!</span>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "music",
});
</script>
<style lang="scss" scoped></style>
