<template>
  <div class="home">
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="4">
        <blog-aside-left></blog-aside-left>
      </el-col>
      <el-col :span="14">
        <blog-main></blog-main>
      </el-col>
      <el-col :span="6">
        <blog-aside-right></blog-aside-right>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import blogAsideRight from "./asideRight/Index.vue";
import blogAsideLeft from "./asideLeft/Index.vue";
import blogMain from "./main/Index.vue";

export default defineComponent({
  name: "home",
  components: {
    blogAsideRight,
    blogAsideLeft,
    blogMain,
  },
});
</script>

<style lang="scss" scoped>
.home {
  margin: 20px auto;
  max-width: 1122px;
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
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
