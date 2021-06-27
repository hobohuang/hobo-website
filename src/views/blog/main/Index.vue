<template>
  <div class="blog-main">
    <daily-sentence />
    <blog-content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dailySentence from "./DailySentence.vue";
import blogContent from "./blogContent/Index.vue";

export default defineComponent({
  name: "blogMain",
  components: {
    dailySentence,
    blogContent,
  },
});
</script>

<style lang="scss" scoped></style>
