import { createRouter, createWebHistory } from "vue-router"
import MainPage from "../pages/MainPage"
import PhotoItemPage from "../pages/PhotoItemPage"


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/image/:id',
        component: PhotoItemPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router