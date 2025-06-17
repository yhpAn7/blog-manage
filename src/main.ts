import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
