import { createApp } from 'vue'
import App from './App.vue'
import router  from './routers'
import { useREM } from './utils/flexible'
import myLibs from './libs'
import './styles/index.scss'
// 注册 svg-icons
import 'virtual:svg-icons-register'

useREM()
createApp(App).use(router).use(myLibs).mount('#app')
