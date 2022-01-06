<template>
  <div class="home">
    <div class="content-box">
      <span class="my-photo" @click="toBlog" />
      <div class="content">
        <p class="chinese">你好！我是黄袁爵。</p>
        <p class="english">hi! I'm hobo sanchez.</p>
      </div>
      <div class="content">
        <p class="chinese">欢迎来到我的网站！</p>
        <p class="english">welcome to my website!</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "home",
  setup() {
    const router = useRouter();
    const toBlog = () => {
      router.push("/blog");
    };
    return {
      toBlog,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  min-height: calc(100vh - 62px);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.my-photo {
  height: 128px;
  width: 128px;
  background-image: url(../../assets/img/photo.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 5px solid #eee;
  margin: 5px 0;
  cursor: pointer;
}
.content {
  margin: 5px 0;
}
.chinese {
  font-size: 32px;
}
.english {
  text-align: center;
  color: #999;
}
</style>
