import ServicePage from './Pages/ServicePage.vue'
import LandingPage from './Pages/LandingPage.vue'
import AboutPage from './Pages/AboutPage.vue'
import CareerPage from './Pages/CareerPage.vue'
import {createRouter,createWebHistory} from 'vue-router';

const routes = [
    {
        name:"LandingPage",
        component:LandingPage,
        path:"/"
    },
    {
        name:"ServicePage",
        component:ServicePage,
        path:"/services"
    },
    {
        name:"AboutPage",
        component:AboutPage,
        path:"/about"
    },
    {
        name:"CareerPage",
        component:CareerPage,
        path:"/career"
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;