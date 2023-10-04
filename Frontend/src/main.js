import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
// import './style.css'
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'

import router from './routers/router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')
