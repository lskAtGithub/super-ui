import { createApp } from "vue"
import App from './App.vue'

import superUi from 'super-ui'

const app = createApp(App)

app.use(superUi)
app.mount('#play')