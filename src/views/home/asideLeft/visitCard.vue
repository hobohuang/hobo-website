<template>
  <el-card class="visit-card" shadow="hover">
    <el-row
      type="flex"
      justify="space-around"
      align="middle"
      style="margin-bottom: 5px"
    >
      <el-col :span="6">
        <img src="../../../assets/headPic.png" class="head-card" />
      </el-col>
      <el-col :span="15">
        <div class="title">hobo包子铺</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="slogan">人生就像包子，你永远不知道下一个是什么馅。</div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "visitCard",
});
</script>

<style lang="scss" scoped>
.head-card {
  width: 100%;
  border-radius: 50%;
}
.title {
  font-weight: bold;
  text-align: center;
}
.slogan {
  color: #999;
  text-align: center;
  font-size: 14px;
}
</style>
