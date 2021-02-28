import { createWebHistory, createRouter } from 'vue-router';
import mainView from '../views/mainView.vue';

const routes = [
    {
        path: '/',
        name: "Main",
        component: mainView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;