<template>
  <h2>安全设置</h2>
  <IxList>
    <IxList-item v-for="item in data" :key="item.title">
      <p>{{ item.title }}</p>
      <span class="description">{{ item.description }}</span>
      <a href="#" class="actions" style="float: right">{{ item.actions }}</a>
      <div class="clearfix"></div>
    </IxList-item>
  </IxList>
</template>

<script lang="ts">
const data = [
  {
    title: '账户密码',
    description: '当前密码强度: 强',
    actions: '修改',
  },
  {
    title: '密保手机',
    description: '已绑定手机: 123****789',
    actions: '修改',
  },
  {
    title: '密保问题',
    description: '未设置密保问题，密保问题可有效保护账户安全',
    actions: '修改',
  },
  {
    title: '备用邮箱',
    description: '已绑定邮箱: idux***.com',
    actions: '修改',
  },
  {
    title: 'MFA 设备',
    description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
    actions: '修改',
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
.clearfix {
  clear: both;
}
</style>
