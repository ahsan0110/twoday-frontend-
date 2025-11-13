import { createApp } from 'vue'
import App from './App.vue'
import '/src/style.css'
import '/src/tablet.css'
import '/src/mobile.css' 

const app = createApp(App);

app.mount('#app');
