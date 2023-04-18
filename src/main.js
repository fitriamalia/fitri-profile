import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import Profil from "./components/Profile.vue";
import Education from "@/components/Education.vue";
import Skill from "@/components/Skill.vue";
import Personal_Data from "@/components/Personal_Data.vue";
import Contact_Me from "@/components/Contact_Me.vue";

const routes = [
    {
        path: "/",
        name: "Profil",
        component: Profil
    },
    {
        path: "/education",
        name: "Education",
        component: Education
    },
    {
        path: "/skill",
        name: "Skill",
        component: Skill
    },
    {
        path: "/personal_data",
        name: "Personal_Data",
        component: Personal_Data
    },
    {
        path: "/contact_me",
        name: "Contact_Me",
        component: Contact_Me
    },

];

const router= createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes
});


export default router;

createApp(App).use(router).mount('#app')
