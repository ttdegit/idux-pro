<template>
  <h2>新消息通知</h2>
  <IxList>
    <IxList-item v-for="item in data" :key="item.title">
      <p class="title">{{ item.title }}</p>
      <span class="description">{{ item.description }}</span>
      <IxSwitch :labels="['开', '关']"></IxSwitch>
      <div class="clearfix"></div>
    </IxList-item>
  </IxList>
</template>

<script lang="ts">
const data = [
  {
    title: '账户密码',
    description: '其他用户的消息将以站内信的形式通知',
  },
  {
    title: '系统消息',
    description: '系统消息将以站内信的形式通知',
  },
  {
    title: '待办任务',
    description: '待办任务将以站内信的形式通知',
  },
]

import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      data,
    }
  },
})
</script>

<style lang="less" scoped>
h2,
p {
  text-align: left;
}

.description {
  color: #999;
  float: left;
}
.ix-switch-md {
  float: right;
}
.clearfix {
  clear: both;
}
</style>
