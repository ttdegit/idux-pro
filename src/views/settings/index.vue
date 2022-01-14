<template>
  <IxForm class="demo-form" :control="formGroup" :labelCol="labelCol" :controlCol="controlCol">
    <IxFormItem label="邮箱" labelFor="email" required message="请输入您的邮箱!">
      <IxInput id="email" control="email"></IxInput>
    </IxFormItem>

    <IxFormItem
      label="昵称"
      labelFor="nickname"
      labelTooltip="What do you want other to call you"
      required
      message="请输入您的昵称!"
    >
      <IxInput id="nickname" control="nickname"> </IxInput>
    </IxFormItem>

    <IxFormItem label="个人简介" labelFor="PersonalProfile" required message="请输入个人简介!">
      <IxInput id="PersonalProfile" control="PersonalProfile"> </IxInput>
    </IxFormItem>

    <IxFormItem
      control="phoneNumber"
      label="电话"
      labelFor="phoneNumber"
      required
      message="请输入您的电话!"
    >
      <IxInput id="phoneNumber" control="phoneNumber">
        <template #addonBefore>
          <IxSelect control="phoneNumberPrefix" style="width: 70px">
            <IxSelectOption label="+86" value="+86"></IxSelectOption>
            <IxSelectOption label="+87" value="+87"></IxSelectOption>
          </IxSelect>
        </template>
      </IxInput>
    </IxFormItem>

    <IxFormWrapper control="address">
      <IxFormItem label="省" required message="请输入您的所在省!">
        <IxInput control="city"></IxInput>
      </IxFormItem>

      <IxFormItem label="城市" required message="请输入您的所在城市!">
        <IxInput control="street"></IxInput>
      </IxFormItem>
    </IxFormWrapper>

    <IxFormItem :controlCol="noLabelControlCol">
      <IxButton mode="primary" @click="register">Register</IxButton>
    </IxFormItem>
  </IxForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Validators, useFormGroup } from '@idux/cdk/forms'

interface Address {
  city: string
  street: string
  zip?: number
}

export default defineComponent({
  setup() {
    const labelCol = { sm: 8, xs: 24 }
    const controlCol = { sm: 16, xs: 24 }
    const noLabelControlCol = { sm: { offset: 8, span: 16 }, xs: 24 }

    const { required, email } = Validators

    const addressGroup = useFormGroup<Address>({
      city: ['', required],
      street: ['', required],
      zip: [undefined],
    })

    const formGroup = useFormGroup({
      email: ['', [required, email]],
      nickname: ['', required],
      phoneNumberPrefix: ['+86', required],
      phoneNumber: ['', required],
      PersonalProfile: ['', required],
      address: addressGroup,
    })

    const register = () => {
      if (formGroup.valid.value) {
        console.log('register', formGroup.getValue())
      } else {
        formGroup.markAsDirty()
      }
    }

    return {
      formGroup,
      labelCol,
      controlCol,
      noLabelControlCol,
      register,
    }
  },
})
</script>

<style lang="less" scoped>
.demo-form {
  max-width: 400px;
}
</style>
