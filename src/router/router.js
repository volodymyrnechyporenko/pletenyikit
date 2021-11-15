import {createRouter, createWebHistory} from "vue-router"

import Main from "@/pages/Main"
import Toys from "@/pages/Toys"
import Accessories from "@/pages/Accessories"
import Pillows from "@/pages/Pillows"
import Kitchen from "@/pages/Kitchen"
import Order from "@/pages/Order"
<<<<<<< HEAD

import Accessories_beret_sriblo from "@/pages/Accessories_beret_sriblo"
import Accessories_shalyk_beret_svitlyi_bezh from "@/pages/Accessories_shalyk_beret_svitlyi_bezh"
import Accessories_baktus_vesniana_zelen from "@/pages/Accessories_baktus_vesniana_zelen"
import Accessories_mitenky_olyvkovi_kosy from "@/pages/Accessories_mitenky_olyvkovi_kosy"
import Accessories_mitenky_fakturni_sovy from "@/pages/Accessories_mitenky_fakturni_sovy"
import Accessories_rukavytsi_siri_kosy from "@/pages/Accessories_rukavytsi_siri_kosy"
import Accessories_rukavytsi_mobilnogo_blakytno_zhovti from "@/pages/Accessories_rukavytsi_mobilnogo_blakytno_zhovti"
import Accessories_mitenky_snizhna_blakyt from "@/pages/Accessories_mitenky_snizhna_blakyt"
import Accessories_mitenky_fioletovyi_melanzh from "@/pages/Accessories_mitenky_fioletovyi_melanzh"
import Accessories_mitenky_snizhynky from "@/pages/Accessories_mitenky_snizhynky"
import Accessories_mitenky_snizhne_zoloto from "@/pages/Accessories_mitenky_snizhne_zoloto"
import Accessories_mitenky_try_troyandy from "@/pages/Accessories_mitenky_try_troyandy"
import Accessories_rukavytsi_pukhnastyky from "@/pages/Accessories_rukavytsi_pukhnastyky"
import Accessories_rukavytsi_zhakard from "@/pages/Accessories_rukavytsi_zhakard"

import Toys_koshenya_rudenki_vushka from "@/pages/Toys_koshenya_rudenki_vushka"
import Toys_myshka_bila from "@/pages/Toys_myshka_bila"
import Toys_myshka_temno_sira from "@/pages/Toys_myshka_temno_sira"
import Toys_myshka_sira from "@/pages/Toys_myshka_sira"
import Toys_kotyk_bezhevyi from "@/pages/Toys_kotyk_bezhevyi"
import Toys_realistychna_kotoigrashka from "@/pages/Toys_realistychna_kotoigrashka"
import Toys_kotyk_blakytnookyi from "@/pages/Toys_kotyk_blakytnookyi"
import Toys_myshka_ruda from "@/pages/Toys_myshka_ruda"
import Toys_myshka_bukliovana_sira from "@/pages/Toys_myshka_bukliovana_sira"
import Toys_kotyk_bilyi from "@/pages/Toys_kotyk_bilyi"
import Toys_kotyk_siryi from "@/pages/Toys_kotyk_siryi"
import Toys_koshenyatko_serdechko from "@/pages/Toys_koshenyatko_serdechko"

import Pillows_buzkova_zirka from "@/pages/Pillows_buzkova_zirka"
import Pillows_kotosyluet from "@/pages/Pillows_kotosyluet"
import Pillows_biryuzova_zirka from "@/pages/Pillows_biryuzova_zirka"
import Pillows_zirka_chervoni_tony from "@/pages/Pillows_zirka_chervoni_tony"
import Pillows_minimalizm_lapky from "@/pages/Pillows_minimalizm_lapky"
import Pillows_nosyk_serdechko from "@/pages/Pillows_nosyk_serdechko"
import Pillows_pudrova_kytska from "@/pages/Pillows_pudrova_kytska"
import Pillows_fioletovyi_gentleman from "@/pages/Pillows_fioletovyi_gentleman"
import Pillows_rozhevyi_velur from "@/pages/Pillows_rozhevyi_velur"
import Pillows_synio_bezhevyi_melanzh from "@/pages/Pillows_synio_bezhevyi_melanzh"
import Pillows_bezhevyi_melanzh from "@/pages/Pillows_bezhevyi_melanzh"
import Pillows_siryi_kit_rozhevi_lapky from "@/pages/Pillows_siryi_kit_rozhevi_lapky"
import Pillows_zhovtyi_pukhnastyi_kotyk from "@/pages/Pillows_zhovtyi_pukhnastyi_kotyk"
import Pillows_siryi_zelenookyi_smugach from "@/pages/Pillows_siryi_zelenookyi_smugach"
import Pillows_pesyk_burshtynovi_ochi from "@/pages/Pillows_pesyk_burshtynovi_ochi"
import Pillows_pianino from "@/pages/Pillows_pianino"
import Pillows_rodynne_derevo from "@/pages/Pillows_rodynne_derevo"
import Pillows_serdechko from "@/pages/Pillows_serdechko"
import Pillows_pukhkenkyi_pesopodukh from "@/pages/Pillows_pukhkenkyi_pesopodukh"
import Pillows_zhovtyi_bukliovanyi_pesyk from "@/pages/Pillows_zhovtyi_bukliovanyi_pesyk"
import Pillows_sira_melanzheva_myshka from "@/pages/Pillows_sira_melanzheva_myshka"
import Pillows_sira_bukliovana_myshka from "@/pages/Pillows_sira_bukliovana_myshka"
import Pillows_metelyk_syni_smuzhky from "@/pages/Pillows_metelyk_syni_smuzhky"
import Pillows_metelyk_chervoni_smuzhky from "@/pages/Pillows_metelyk_chervoni_smuzhky"
import Pillows_lysychka from "@/pages/Pillows_lysychka"
import Pillows_syniy_kyt from "@/pages/Pillows_syniy_kyt"
import Pillows_synio_rozhevyi_kyt from "@/pages/Pillows_synio_rozhevyi_kyt"
import Pillows_rozhevyi_zaichyk from "@/pages/Pillows_rozhevyi_zaichyk"

import Kitchen_serdechka from "@/pages/Kitchen_serdechka"
import Kitchen_zakokhani_kotyky from "@/pages/Kitchen_zakokhani_kotyky"
import Kitchen_kaleidoskop from "@/pages/Kitchen_kaleidoskop"
import Kitchen_chervona_faktura from "@/pages/Kitchen_chervona_faktura"
import Kitchen_koliorovi_smailyky from "@/pages/Kitchen_koliorovi_smailyky"
import Kitchen_siri_smailyky from "@/pages/Kitchen_siri_smailyky"
import Kitchen_yabluka from "@/pages/Kitchen_yabluka"
=======
import ToysDetails from "@/pages/ToysDetails"
import AccessoriesDetails from "@/pages/AccessoriesDetails"
import PillowsDetails from "@/pages/PillowsDetails"
import KitchenDetails from "@/pages/KitchenDetails"
>>>>>>> dev

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
<<<<<<< HEAD
        path: '/toys/myshka_bila',
        component: Toys_myshka_bila
    },
    {
        path: '/toys/myshka_temno_sira',
        component: Toys_myshka_temno_sira
    },
    {
        path: '/toys/myshka_sira',
        component: Toys_myshka_sira
    },
    {
        path: '/toys/kotyk_bezhevyi',
        component: Toys_kotyk_bezhevyi
    },
    {
        path: '/toys/realistychna_kotoigrashka',
        component: Toys_realistychna_kotoigrashka
    },
    {
        path: '/toys/kotyk_blakytnookyi',
        component: Toys_kotyk_blakytnookyi
    },
    {
        path: '/toys/myshka_ruda',
        component: Toys_myshka_ruda
    },
    {
        path: '/toys/myshka_bukliovana_sira',
        component: Toys_myshka_bukliovana_sira
    },
    {
        path: '/toys/kotyk_bilyi',
        component: Toys_kotyk_bilyi
    },
    {
        path: '/toys/kotyk_siryi',
        component: Toys_kotyk_siryi
    },
    {
        path: '/toys/koshenya_rudenki_vushka',
        component: Toys_koshenya_rudenki_vushka
    },
    {
        path: '/toys/koshenyatko_serdechko',
        component: Toys_koshenyatko_serdechko
    },
    {
        path: '/accessories/beret_sriblo',
        component: Accessories_beret_sriblo
    },
    {
        path: '/accessories/shalyk_beret_svitlyi_bezh',
        component: Accessories_shalyk_beret_svitlyi_bezh
    },
    {
        path: '/accessories/baktus_vesniana_zelen',
        component: Accessories_baktus_vesniana_zelen
    },
    {
        path: '/accessories/mitenky_olyvkovi_kosy',
        component: Accessories_mitenky_olyvkovi_kosy
    },
    {
        path: '/accessories/mitenky_fakturni_sovy',
        component: Accessories_mitenky_fakturni_sovy
    },
    {
        path: '/accessories/rukavytsi_siri_kosy',
        component: Accessories_rukavytsi_siri_kosy
    },
    {
        path: '/accessories/rukavytsi_mobilnogo_blakytno_zhovti',
        component: Accessories_rukavytsi_mobilnogo_blakytno_zhovti
    },
    {
        path: '/accessories/mitenky_snizhna_blakyt',
        component: Accessories_mitenky_snizhna_blakyt
    },
    {
        path: '/accessories/mitenky_fioletovyi_melanzh',
        component: Accessories_mitenky_fioletovyi_melanzh
    },
    {
        path: '/accessories/mitenky_snizhynky',
        component: Accessories_mitenky_snizhynky
    },
    {
        path: '/accessories/mitenky_snizhne_zoloto',
        component: Accessories_mitenky_snizhne_zoloto
    },
    {
        path: '/accessories/mitenky_try_troyandy',
        component: Accessories_mitenky_try_troyandy
    },
    {
        path: '/accessories/rukavytsi_pukhnastyky',
        component: Accessories_rukavytsi_pukhnastyky
    },
    {
        path: '/accessories/rukavytsi_zhakard',
        component: Accessories_rukavytsi_zhakard
    },
    {
        path: '/pillows/buzkova_zirka',
        component: Pillows_buzkova_zirka
    },
    {
        path: '/pillows/kotosyluet',
        component: Pillows_kotosyluet
    },
    {
        path: '/pillows/biryuzova_zirka',
        component: Pillows_biryuzova_zirka
    },
    {
        path: '/pillows/zirka_chervoni_tony',
        component: Pillows_zirka_chervoni_tony
=======
        path: '/toys/:link',
        name: 'ToysDetails',
        component: ToysDetails
>>>>>>> dev
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