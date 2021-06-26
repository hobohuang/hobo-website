<!--  -->
<template>
  <div class="blog-content">
    <el-empty description="暂无内容"></el-empty>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "blogContent",
  setup() {
    const activeIndex = ref("talk");
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
.blog-content {
  margin-top: 10px;
  background: #fff;
  border-radius: 4px;
}
</style>
