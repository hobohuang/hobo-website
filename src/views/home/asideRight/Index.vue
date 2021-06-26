<template>
  <div class="blog-aside-right">
    <blog-search />
    <visit-card />
    <blog-footer />
  </div>
</template>

<script lang="ts">
import blogSearch from "./BlogSearch.vue";
import blogFooter from "./BlogFooter.vue";
import visitCard from "./VisitCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "blogAsideRight",
  components: {
    blogSearch,
    blogFooter,
    visitCard,
  },
});
</script>

<style lang="scss" scoped></style>
