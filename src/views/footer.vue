<template>
  <IxSpace class="footer" :size="40">
    <a href="" title="Idux Pro" target="_blank">Idux Pro</a>
    <a href="" title="github" target="_blank"><IxIcon name="github" /></a>
    <a href="https://idux.site/" title="Idux" target="_blank">Idux</a>
  </IxSpace>
</template>
<style lang="less">
.footer {
  padding: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  a {
    color: #00000073;
    transition: color 0.3s;
  }
  a:hover {
    color: #000000c2;
  }
}
</style>
