import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
