<template>
  <div class="daily-sentence">
    <font-awesome-icon icon="blog" class="blog-icon" />
    <p id="content">这里是通知栏。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "dailySentence",
});
</script>
<style lang="scss" scoped>
.daily-sentence {
  height: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 14px;
  .content {
    color: rgba(0, 0, 0, 0.54);
  }
}
.blog-icon {
  margin: 1px 5px 0 10px;
  color: rgba(0, 0, 0, 0.54);
}
</style>
