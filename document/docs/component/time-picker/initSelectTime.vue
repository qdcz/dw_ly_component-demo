<template>
  <div>
    <p>给 v-model 一个值即可设置默认显示时间，旋转器会自动定位到该时间的位置</p>
    <p>注意：v-model 的值必须要符合时间格式（hh:mm:ss）,否则会被清空导致无效</p>
    <dw-time-picker
      v-model="data.currentSelect"
      :dynamicCss="data.dynamicCss"
      placeholder="Arbitrary time"
      clearable 
    ></dw-time-picker>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const data = reactive({
      currentSelect: "08:00:05",
      dynamicCss: {
        margin: "10px",
      },
    });
    return {
      data,
    };
  },
});
</script>
