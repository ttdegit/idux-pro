<template>
  <div class="wrapper">
    <IxProLayout v-model:activeKey="activeKey" :menus="dataSource" :theme="theme" :fixed="fixed">
      <template #logo>
        <div class="logo">
          <img src="../assets/logo.svg" />
          Idux Pro
        </div>
      </template>
      <template #headerExtra>
        <IxSpace :size="30">
          <IxInput class="ix-dropdown-trigger" suffix="search" placeholder="在此搜索" />
          <IxIcon name="question-circle" />
          <IxBadge count="6">
            <IxIcon name="alert"></IxIcon>
          </IxBadge>
          <IxDropdown>
            <div class="avatars">
              <IxAvatar src="../src/assets/0.png" />
              danran
            </div>

            <template #overlay>
              <IxMenu>
                <IxMenuItem key="one" icon="user"> 个人中心 </IxMenuItem>
                <IxMenuItem key="two" icon="setting"> 个人设置 </IxMenuItem>
                <IxMenuItem key="two" icon="logout"> 退出登录 </IxMenuItem>
              </IxMenu>
            </template>
          </IxDropdown>
        </IxSpace>
      </template>
      <template #siderFooter>
        <IxProLayoutSiderTrigger></IxProLayoutSiderTrigger>
      </template>
      <div class="content">
        <router-view></router-view>
        <!-- <div>Currently active is: {{ activeKey }}</div> -->
      </div>
      <Footer></Footer>
    </IxProLayout>

    <IxButton
      mode="primary"
      icon="setting"
      size="lg"
      style="position: fixed; right: 10px; top: 200px"
      @click="showDrawer"
    ></IxButton>
    <IxDrawer v-model:visible="visible" header="主题设置">
      <IxSpace>
        <div>
          whole: <IxSelect v-model:value="wholeTheme" :options="wholdThemeOptionss"></IxSelect>
        </div>
        <template v-if="wholeTheme === 'separate'">
          <div>
            header:
            <IxSelect v-model:value="separateTheme.header" :options="themesOptions"></IxSelect>
          </div>
          <div>
            sider:
            <IxSelect v-model:value="separateTheme.sider" :options="themesOptions"></IxSelect>
          </div>
        </template>
      </IxSpace>
    </IxDrawer>
  </div>
</template>

<script setup lang="ts">
import type { ProLayoutMenuData } from '@idux/pro/layout'

import { computed, reactive, ref } from 'vue'
import Footer from './footer.vue'

const fixed = ref(true)

const activeKey = ref()

// watch(
//   () => activeKey.value,
//   () => {
//     router.push('/success')
//   },
// )

const visible = ref(false)

const showDrawer = () => {
  visible.value = !visible.value
}

const wholeTheme = ref('light')
const themesOptions = [
  { key: 'light', label: 'light', value: 'light' },
  { key: 'dark', label: 'dark', value: 'dark' },
]
const wholdThemeOptionss = [
  ...themesOptions,
  { key: 'separate', label: 'separate', value: 'separate' },
]
const separateTheme = reactive({
  header: 'light',
  sider: 'light',
})

const theme = computed(() => {
  if (wholeTheme.value === 'separate') {
    return {
      header: separateTheme.header,
      sider: separateTheme.sider,
    }
  }
  return wholeTheme.value
})

const dataSource: ProLayoutMenuData[] = [
  {
    type: 'sub',
    key: 'sub1',
    icon: 'dashboard',
    label: 'Dashboard',
    children: [
      { type: 'item', key: 'item1', label: '分析页' },
      { type: 'item', key: 'item2', label: '监控页' },
      { type: 'item', key: 'item3', label: '工作台' },
    ],
  },
  {
    type: 'sub',
    key: 'sub2',
    icon: 'edit',
    label: '表单页',
    children: [
      { type: 'item', key: 'item4', label: '基础表单' },
      { type: 'item', key: 'item5', label: '分步表单' },
      { type: 'item', key: 'item6', label: '高级表单' },
    ],
  },
  {
    type: 'sub',
    key: 'sub3',
    icon: 'bars',
    label: '列表页',
    children: [
      {
        type: 'sub',
        key: 'sub9',
        label: '搜索列表',
        children: [
          { type: 'item', key: 'item7', label: '搜索列表(文章)' },
          { type: 'item', key: 'item8', label: '搜索列表(项目)' },
          { type: 'item', key: 'item9', label: '搜索列表(应用)' },
        ],
      },
      { type: 'item', key: 'item10', label: '查询表格' },
      { type: 'item', key: 'item11', label: '标准列表' },
      { type: 'item', key: 'item12', label: '卡片列表' },
    ],
  },
  {
    type: 'sub',
    key: 'sub4',
    icon: 'normal',
    label: '详情页',
    children: [
      { type: 'item', key: 'item13', label: '基础详情页' },
      { type: 'item', key: 'item14', label: '高级详情页' },
    ],
  },
  {
    type: 'sub',
    key: 'sub5',
    icon: 'check-circle',
    label: '结果页',
    children: [
      { type: 'item', key: 'item15', label: '成功页' },
      { type: 'item', key: 'item16', label: '失败页' },
    ],
  },
  {
    type: 'sub',
    key: 'sub6',
    icon: 'info-circle',
    label: '异常页',
    children: [
      { type: 'item', key: 'item17', label: '403' },
      { type: 'item', key: 'item18', label: '404' },
      { type: 'item', key: 'item19', label: '500' },
    ],
  },
  {
    type: 'sub',
    key: 'sub7',
    icon: 'user',
    label: '个人页',
    children: [
      { type: 'item', key: 'item20', label: '个人中心' },
      { type: 'item', key: 'item21', label: '个人设置' },
    ],
  },
  {
    type: 'sub',
    key: 'sub8',
    icon: 'pie-chart',
    label: '图形编辑器',
    children: [
      { type: 'item', key: 'item22', label: '流程编辑器' },
      { type: 'item', key: 'item23', label: '脑图编辑器' },
      { type: 'item', key: 'item24', label: '拓扑编辑器' },
    ],
  },
]
</script>
