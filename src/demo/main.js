import { createApp } from 'vue'
import App from './App.vue'
import MinimalUI from '../minimal-ui'

const app = createApp(App)
app.use(MinimalUI)
app.mount('#app')
