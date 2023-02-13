import { createApp } from 'vue'
import App from './App.vue'
import router  from './routers'
import { useREM } from './utils/flexible'
import './styles/index.scss'

useREM()
createApp(App).use(router).mount('#app')
