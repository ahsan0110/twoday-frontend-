import { createRouter, createWebHistory } from "vue-router";

// Pages
import ServicePage from "./Pages/ServicePage.vue";
import LandingPage from "./Pages/LandingPage.vue";
import AboutPage from "./Pages/AboutPage.vue";
import CareerPage from "./Pages/CareerPage.vue";
import ExtraInfo from "./Pages/ExtraInfo.vue";
import ContactPage from "./Pages/ContactPage.vue";

// Admin
import AdminLogin from "./Pages/AdminLogin.vue"; 
import AdminPage from "./Pages/AdminPage.vue";
import AddPage from "./Pages/AddPage.vue";
import EditPage from "./Pages/EditPage.vue";
import MetaTags from "./Pages/MetaTags.vue";
import AdminMetaTags from "./Pages/AdminMetaTags.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/services",
    name: "ServicePage",
    component: ServicePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/career",
    name: "CareerPage",
    component: CareerPage,
  },
  {
    path: "/extra",
    name: "ExtraInfo",
    component: ExtraInfo,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },

  // Admin login
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin,
  },

  // Admin dashboard & protected routes
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/add-page",
    name: "AddPage",
    component: AddPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/pages/edit/:id",
    name: "EditPage",
    component: EditPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/pages/:pageId/meta-tags",
    name: "MetaTags",
    component: MetaTags,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/pages/meta-tags",
    name: "AdminMetaTags",
    component: AdminMetaTags,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route Guard for admin authentication
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("admin_token");

  if (to.meta.requiresAuth && !token) {
    // Not logged in, redirect to login
    next({ name: "AdminLogin" });
  } else if (to.name === "AdminLogin" && token) {
    // Already logged in, prevent going back to login
    next({ name: "AdminPage" });
  } else {
    next();
  }
});

export default router;
