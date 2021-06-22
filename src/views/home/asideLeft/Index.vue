<template>
  <div class="blog-aside-left">
    <visit-card />
  </div>
</template>

<script lang="ts">
import visitCard from "./visitCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "blogAsideLeft",
  components: {
    visitCard,
  },
});
</script>

<style lang="scss">
.blog-aside-left {
  height: 100%;
  box-sizing: border-box;
}
</style>
