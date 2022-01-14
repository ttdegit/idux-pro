<template>
  <IxLayout>
    <IxLayoutSider>
      <IxMenu mode="inline" style="width: 256px">
        <IxMenuItem key="基本设置" @click="$router.push('/index')">
          <span>基本设置</span>
        </IxMenuItem>
        <IxMenuItem key="安全设置" @click="$router.push('/security')">
          <span>安全设置</span>
        </IxMenuItem>
        <IxMenuItem key="账号绑定" @click="$router.push('/binding')">
          <span>账号绑定</span>
        </IxMenuItem>
        <IxMenuItem key="新消息通知" @click="$router.push('/notification')">
          <span>新消息通知</span>
        </IxMenuItem>
      </IxMenu>
    </IxLayoutSider>
    <IxLayoutContent id="content"> <router-view></router-view> </IxLayoutContent>
  </IxLayout>
</template>
<style lang="less">
#content {
  margin-left: 100px;
}
</style>
