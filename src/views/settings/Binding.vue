<template>
  <h2>账号绑定</h2>
  <IxList>
    <IxList-item v-for="item in data" :key="item.title">
      <img :src="item.src" />
      <span class="title">{{ item.title }}</span
      ><br />
      <span class="description">{{ item.description }}</span>
      <a href="#" class="actions" style="float: right">{{ item.actions }}</a>
      <div class="clearfix"></div>
    </IxList-item>
  </IxList>
</template>

<script lang="ts">
import img from '../../assets/logo.svg'
const data = [
  {
    src: img,
    title: '绑定账号',
    description: '当前未绑定账号',
    actions: '绑定',
  },
  {
    src: img,
    title: '绑定账号',
    description: '当前未绑定账号',
    actions: '绑定',
  },
  {
    src: img,
    title: '绑定账号',
    description: '当前未绑定账号',
    actions: '绑定',
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
h2 {
  text-align: left;
}
img {
  float: left;
  height: 45px;
}
.title,
.description {
  float: left;
  margin-left: 10px;
}
.description {
  color: #999;
}
.clearfix {
  clear: both;
}
</style>
