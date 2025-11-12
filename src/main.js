import { createApp } from 'vue'
import App from './App.vue'
import Style from '/src/style.css'
import Responsive from '/src/responsive.css'    

createApp(App).mount('#app').use(Style).use(Responsive);
