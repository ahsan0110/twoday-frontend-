import { createApp } from "vue";
import App from "./App.vue";
import "/src/style.css";
import router from "./router";
import { loadingState } from "./loading";
import { createHead } from "@vueuse/head";

const app = createApp(App);       // ✅ create app first
const head = createHead();         // ✅ create head after app

app.use(router);
app.use(head);                     // ✅ install head plugin

app.mount("#app");                 // ✅ mount the app

// Router hooks AFTER app is created
router.beforeEach((to, from, next) => {
  loadingState.loading = true;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    loadingState.loading = false;
  }, 700);
});
