<template>
  <div class="blog-footer">
    <el-row>
      <el-col :span="24">
        <a href="#">关于本站</a>
        <span class="footer-dot"></span>
        <a href="#">关于我</a>
      </el-col>
    </el-row>
    <el-row>
      <el-col :soan="24">
        <a href="#">联系我</a>
        <span> © 2021 包子头</span>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "blogFooter",
});
</script>
<style lang="scss" scoped>
.blog-footer {
  margin-top: 10px;
  text-align: center;
  font-size: 13px;
  color: #8590a6;
  a {
    color: #8590a6;
  }
}
.footer-dot:after {
  margin: 0 5px;
  content: "\B7";
}
</style>
