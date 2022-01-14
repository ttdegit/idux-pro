<template>
  <IxResult status="error" title="提交失败" subtitle="请核对并修改以下信息后，再重新提交。">
    <template #extra>
      <IxButton mode="primary">返回修改</IxButton>
    </template>
    <!-- TODO use Typography -->
    <div class="title">您提交的内容有如下错误：</div>
    <ul>
      <li>
        <IxIcon name="close-circle" class="red" /><span>您的账户已被冻结</span>
        <a href="#">立即解冻 ></a>
      </li>
      <li>
        <IxIcon name="close-circle" class="red" /><span>您的账户还不具备申请资格</span>
        <a href="#">立即升级 ></a>
      </li>
    </ul>
  </IxResult>
</template>
<style lang="less">
.title {
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 16px;
}
.red {
  color: red;
  margin-right: 8px;
}
.ix-result-content {
  text-align: left !important;
  a {
    margin-left: 16px;
  }
  li {
    padding: 10px 0;
  }
}
</style>
