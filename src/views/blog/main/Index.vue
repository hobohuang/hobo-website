<template>
  <div class="blog-main">
    <input-wetalk />
    <daily-sentence />
    <blog-content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dailySentence from "./DailySentence.vue";
import blogContent from "./blogContent/Index.vue";
import inputWetalk from "@/components/InputWetalk.vue";

export default defineComponent({
  name: "blogMain",
  components: {
    dailySentence,
    blogContent,
    inputWetalk,
  },
});
</script>

<style lang="scss" scoped></style>
