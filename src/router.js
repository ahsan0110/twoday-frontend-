import { createRouter, createWebHistory } from "vue-router";

import ServicePage from "./Pages/ServicePage.vue";
import LandingPage from "./Pages/LandingPage.vue";
import AboutPage from "./Pages/AboutPage.vue";
import CareerPage from "./Pages/CareerPage.vue";
import ExtraInfo from "./Pages/ExtraInfo.vue";
import ContactPage from "./Pages/ContactPage.vue";
import AdminPage from "./Pages/AdminPage.vue";
import AddPage from "./Pages/AddPage.vue";
import MetaTags from "./Pages/MetaTags.vue";
import EditPage from "./Pages/EditPage.vue";
import AdminMetaTags from "./Pages/AdminMetaTags.vue";


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
    path: "/admin",
    name: "admin",
    component: AdminPage,
  },
  {
    path: "/admin/add-page",
    name: "AddPage",
    component: AddPage,
  },
  {
    path: "/admin/pages/edit/:id",
    name: "EditPage",
    component: EditPage,
  },
  {
    path: "/admin/pages/:pageId/meta-tags",
    name: "MetaTags",
    component: MetaTags,
  },
  {
  path: "/admin/pages/meta-tags",
  name: "AdminMetaTags",
  component: AdminMetaTags,
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
