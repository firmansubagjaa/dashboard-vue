import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/route'
import LayoutViewVue from './views/DasboardSection/DashboardLayoutView.vue'
import { AuthLayoutViewVue } from './views/AuthSection'

const app = createApp(App)
app.component('LayoutDashboard', LayoutViewVue)
app.component('LayoutAuthDashboard', AuthLayoutViewVue)
app.use(router)
app.mount('#app')
