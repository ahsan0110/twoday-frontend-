import { createApp } from 'vue'
import App from './App.vue'
import '/src/style.css'
import router from './router'
import { loadingState } from "./loading";
import { createHead } from '@vueuse/head';


const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.mount('#app');


router.beforeEach((to, from, next) => {
  loadingState.loading = true;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    loadingState.loading = false;
  }, 700);
});
