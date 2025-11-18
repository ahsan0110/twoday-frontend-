import ServicePage from "./Pages/ServicePage.vue";
import LandingPage from "./Pages/LandingPage.vue";
import AboutPage from "./Pages/AboutPage.vue";
import CareerPage from "./Pages/CareerPage.vue";
import ExtraInfo from "./Pages/ExtraInfo.vue";
import ContactPage from "./Pages/ContactPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "LandingPage",
    component: LandingPage,
    path: "/",
    meta: { title: "My App - Twoday" },
  },
  {
    name: "ServicePage",
    component: ServicePage,
    path: "/services",
    meta: { title: "Services - Twoday" },
  },
  {
    name: "AboutPage",
    component: AboutPage,
    path: "/about",
    meta: { title: "About Us - Twoday" },
  },
  {
    name: "CareerPage",
    component: CareerPage,
    path: "/career",
    meta: { title: "Career - Twoday" },
  },
  {
    name: "ExtraInfo",
    component: ExtraInfo,
    path: "/extra",
    meta: { title: "About Us - Twoday" },
  },
  {
    name: "ContactPage",
    component: ContactPage,
    path: "/contact",
    meta: { title: "Contact - Twoday" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
