import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Welcome from "../components/Welcome.vue";
import Login from "../components/Login.vue";

const routes = [
    {
        path: "/", 
        component: Home, 
        redirect: "/login",
        children: [
            {
                path: '/welcome',
                component: Welcome,
                meta: {
                    title: '欢迎页面'
                }
            },
            {
                path: '/login',
                component: Login,
                meta: {
                    title: '登录页面'
                }
            }
        ]
    },

];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;