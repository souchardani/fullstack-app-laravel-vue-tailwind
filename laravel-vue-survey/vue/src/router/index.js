import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory,
    routes,
});

export default router;
