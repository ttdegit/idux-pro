import { createApp } from 'vue'
import App from './App.vue'
import { router } from './plugins/router'
import idux from './plugins/idux'
import './style.css'

createApp(App).use(router).use(idux).mount('#app')
