<template>
  <el-card class="talk-item">
    <template #header>
      <div class="talk-option">
        <span class="show-group">公开</span>
        <el-button class="button" type="text">
          <font-awesome-icon icon="chevron-down" />
        </el-button>
      </div>
    </template>
    <header class="talk-header">
      <img src="../../../../assets/headPic.png" alt="" class="header-pic" />
      <div class="name-and-time">
        <p class="talk-name">包子头</p>
        <p class="talk-time">一年前</p>
      </div>
    </header>
    <div class="talk-article">测试</div>
    <footer class="talk-footer">
      <div class="footer-tool-item">
        <font-awesome-icon icon="eye" class="tool-icon" />
        <span>人数</span>
      </div>
      <div class="footer-tool-item">
        <font-awesome-icon icon="comment-dots" class="tool-icon" />
        <span>评论</span>
      </div>
      <div class="footer-tool-item">
        <font-awesome-icon icon="heart" class="tool-icon" />
        <span>喜欢</span>
      </div>
    </footer>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "contentItem",
});
</script>
<style lang="scss" scoped>
.talk-item {
  margin-bottom: 10px;

  .talk-option {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .show-group {
      font-size: 12px;
      color: #939393;
    }
  }
  .talk-header {
    height: 50px;
    display: flex;
    align-items: center;

    .header-pic {
      height: 48px;
      margin-right: 10px;
      border: 1px solid rgb(230, 236, 240);
      border-radius: 50%;
    }
    .name-and-time {
      .talk-name {
        font-size: 14px;
      }
      .talk-time {
        font-size: 12px;
        color: #939393;
      }
    }
  }
  .talk-article {
    padding-left: 60px;
    font-size: 14px;
  }
  .talk-footer {
    height: 40px;
    line-height: 40px;
    margin: 0 15px;
    display: flex;

    .footer-tool-item {
      width: 33%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 12px;
      color: #939393;

      .tool-icon {
        margin-right: 5px;
      }
    }
  }
}
</style>
