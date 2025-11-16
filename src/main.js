import { createApp } from 'vue'
import App from './App.vue'
import '/src/style.css'
import router from './router'

const app = createApp(App);

app.use(router);
app.mount('#app');


import { loadingState } from "./loading";

router.beforeEach((to, from, next) => {
  loadingState.loading = true;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    loadingState.loading = false;
  }, 700);
});
