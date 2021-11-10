import {createRouter, createWebHistory} from "vue-router"

import Main from "@/pages/Main"
import Toys from "@/pages/Toys"
import Accessories from "@/pages/Accessories"
import Pillows from "@/pages/Pillows"
import Kitchen from "@/pages/Kitchen"
import Order from "@/pages/Order"
import ToysDetails from "@/pages/ToysDetails"
import AccessoriesDetails from "@/pages/AccessoriesDetails"
import PillowsDetails from "@/pages/PillowsDetails"
import KitchenDetails from "@/pages/KitchenDetails"

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
        name: 'ToysDetails',
        component: ToysDetails
    },
    {
        path: '/accessories/:link',
        name: 'AccessoriesDetails',
        props: true,
        component: AccessoriesDetails
    },
    {
        path: '/pillows/:link',
        name: 'PillowsDetails',
        component: PillowsDetails
    },
    {
        path: '/kitchen/:link',
        name: 'KitchenDetails',
        component: KitchenDetails
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