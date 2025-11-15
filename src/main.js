import { createApp } from 'vue'
import App from './App.vue'
import '/src/style.css'
import '/src/tablet.css'
import '/src/mobile.css' 
import router from './router'

const app = createApp(App);

app.use(router);
app.mount('#app');
