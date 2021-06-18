<template>
  <div class="home">
    <el-row type="flex" justify="space-between">
      <el-col :span="5">
        <blog-aside-left class="grid-content bg-purple"></blog-aside-left>
      </el-col>
      <el-col :span="12">
        <blog-main class="grid-content bg-purple-light"></blog-main>
      </el-col>
      <el-col :span="5">
        <blog-aside-right class="grid-content bg-purple"></blog-aside-right>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <blog-footer class="grid-content bg-purple-dark"></blog-footer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import blogAsideLeft from "./asideLeft/Index.vue";
import blogAsideRight from "./asideRight/Index.vue";
import blogMain from "./main/Index.vue";
import blogFooter from "./footer/Index.vue";

export default defineComponent({
  name: "home",
  components: {
    blogAsideLeft,
    blogAsideRight,
    blogMain,
    blogFooter,
  },
});
</script>

<style lang="scss">
.home {
  margin: 20px 0;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
