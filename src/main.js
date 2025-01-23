import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CurrentResult from './components/CurrentResult.vue'
import router from './router'

const app = createApp(App)
app.component('CurrentResult', CurrentResult)
app.use(router)
app.mount('#app')
