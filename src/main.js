import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CurrentResult from './components/CurrentResult.vue'

const app = createApp(App)
app.component('CurrentResult', CurrentResult)
app.mount('#app')
