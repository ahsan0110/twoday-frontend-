import { createApp } from 'vue'
import App from './App.vue'
import '/src/style.css'
import router from './router'
import { loadingState } from "./loading";

const app = createApp(App);

app.use(router);
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
