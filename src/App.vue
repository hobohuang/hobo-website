<template>
  <div class="app">
    <top-nav />
    <el-row type="flex" justify="space-between">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import topNav from "./components/TopNav.vue";
export default defineComponent({
  name: "app",
  components: {
    topNav,
  },
});
</script>

<style lang="scss" scoped></style>
