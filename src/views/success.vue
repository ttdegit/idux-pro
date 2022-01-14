<template>
  <IxResult
    status="success"
    title="提交成功"
    subtitle="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
"
  >
    <template #extra>
      <IxButton mode="primary">返回列表</IxButton>
      <IxButton>查看项目</IxButton>
      <IxButton>打印</IxButton>
    </template>

    <div class="title">项目名称</div>
    <ul>
      <li>项目 ID:12345</li>
      <li>负责人:小i</li>
      <li>生效时间:2022-1-1-12 ~ 2022-1-12</li>
    </ul>

    <IxStepper :progressDot="true" :active="1">
      <IxStepperItem
        status="finish"
        title="创建项目"
        subTitle="小i"
        description="2022-1-1-12"
      ></IxStepperItem>
      <IxStepperItem title="部门初审" subTitle="小d"></IxStepperItem>
      <IxStepperItem title="财务复核" description="This is a description."></IxStepperItem>
      <IxStepperItem title="完成" description="This is a description."></IxStepperItem>
    </IxStepper>
  </IxResult>
</template>
<style lang="less">
.title {
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 16px;
}
.ix-result-content {
  text-align: left !important;
  li {
    display: inline-block;
    margin-right: 20%;
    margin-bottom: 40px;
  }
}
</style>
