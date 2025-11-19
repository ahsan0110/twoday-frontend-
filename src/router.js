import ServicePage from "./Pages/ServicePage.vue";
import LandingPage from "./Pages/LandingPage.vue";
import AboutPage from "./Pages/AboutPage.vue";
import CareerPage from "./Pages/CareerPage.vue";
import ExtraInfo from "./Pages/ExtraInfo.vue";
import ContactPage from "./Pages/ContactPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import AdminPage from "./components/AdminPage.vue";


const routes = [
  {
    name: "LandingPage",
    component: LandingPage,
    path: "/",
  },
  {
    name: "ServicePage",
    component: ServicePage,
    path: "/services",
  },
  {
    name: "AboutPage",
    component: AboutPage,
    path: "/about",
  },
  {
    name: "CareerPage",
    component: CareerPage,
    path: "/career",
  },
  {
    name: "ExtraInfo",
    component: ExtraInfo,
    path: "/extra",
  },
  {
    name: "ContactPage",
    component: ContactPage,
    path: "/contact",
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
