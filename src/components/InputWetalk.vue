<template>
  <div class="input-wetalk">
    <el-input
      v-model="wetalkInput"
      placeholder="有什么新鲜事想要分享给大家？"
      maxlength="240"
      resize="none"
      type="textarea"
      autosize
      show-word-limit
    ></el-input>
    <div class="option-bar">
      <div class="left-option-bar">
        <button class="bar-button">
          <i>
            <font-awesome-icon :icon="['far', 'grin']" />
          </i>
        </button>
        <button class="bar-button">
          <i>
            <font-awesome-icon :icon="['far', 'image']" />
          </i>
        </button>
        <button class="bar-button">
          <i>
            <font-awesome-icon :icon="['fa', 'map-marker-alt']" />
          </i>
        </button>
      </div>
      <div class="right-option-bar">
        <button class="bar-button">
          <i>
            <font-awesome-icon :icon="['fa', 'clock']" />
          </i>
        </button>
        <!-- 该条说说可见的权限范围 -->
        <!-- <div style="font-size='16px'">公开</div> -->
        <el-button type="warning" round :disabled="isSendWetalk"
          >发送</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "inputWetalk",
  setup() {
    let wetalkInput = ref("");
    let isSendWetalk = computed(() => {
      if (wetalkInput.value === "") {
        return true;
      } else {
        return false;
      }
    });
    return {
      wetalkInput,
      isSendWetalk,
    };
  },
});
</script>
<style lang="scss" scoped>
.input-wetalk {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
}
.option-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
  height: 32px;
}
.left-option-bar,
.right-option-bar {
  display: flex;
  flex-direction: row;
  height: 32px;
  line-height: 32px;
}
.bar-button {
  height: 32px;
  width: 32px;
  line-height: 32px;
  font-size: 18px;
  text-align: center;
  color: #83868a;
  border-radius: 50%;
  cursor: pointer;
}
.bar-button:hover {
  background-color: #fff2e5;
  color: #ff8200;
}
</style>
