import {createRouter, createWebHistory} from "vue-router"

import Main from "@/pages/Main"
import Toys from "@/pages/Toys"
import Accessories from "@/pages/Accessories"
import Pillows from "@/pages/Pillows"
import Kitchen from "@/pages/Kitchen"
import Order from "@/pages/Order"

export const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/accessories',
        component: Accessories
    },
    {
        path: '/toys',
        component: Toys
    },
    {
        path: '/pillows',
        component: Pillows
    },
    {
        path: '/kitchen',
        component: Kitchen
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '/toys/:link',
        name: 'ProductDetalis',
        component: () => import("@/pages/ProductDetails")
    },
    {
        path: '/accessories/:link',
        name: 'ProductDetalis',
        component: () => import("@/pages/ProductDetails")
    },
    {
        path: '/pillows/:link',
        name: 'ProductDetalis',
        component: () => import("@/pages/ProductDetails")
    },
    {
        path: '/kitchen/:link',
        name: 'ProductDetalis',
        component: () => import("@/pages/ProductDetails")
    }
]

const router = createRouter({
    scrollBehavior (to) {
        if (to.hash) {
            return {
              el: to.hash,
            }
          }
        return { top: 0 }
    },
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;