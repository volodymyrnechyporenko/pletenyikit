import {createRouter, createWebHistory} from "vue-router"

import Main from "@/pages/Main"
import Toys from "@/pages/Toys"
import Accessories from "@/pages/Accessories"
import Pillows from "@/pages/Pillows"
import Kitchen from "@/pages/Kitchen"
import Order from "@/pages/Order"

import ProductDetails from "@/pages/ProductDetails"

import Toys_koshenya_rudenki_vushka from "@/pages/Toys_koshenya_rudenki_vushka"
import Toys_myshka_bila from "@/pages/Toys_myshka_bila"
import Toys_myshka_temno_sira from "@/pages/Toys_myshka_temno_sira"
import Toys_myshka_sira from "@/pages/Toys_myshka_sira"
import Toys_kotyk_bezhevyi from "@/pages/Toys_kotyk_bezhevyi"
import Toys_kotyk_blakytnookyi from "@/pages/Toys_kotyk_blakytnookyi"
import Toys_myshka_ruda from "@/pages/Toys_myshka_ruda"
import Toys_myshka_bukliovana_sira from "@/pages/Toys_myshka_bukliovana_sira"
import Toys_kotyk_bilyi from "@/pages/Toys_kotyk_bilyi"
import Toys_kotyk_siryi from "@/pages/Toys_kotyk_siryi"
import Toys_koshenyatko_serdechko from "@/pages/Toys_koshenyatko_serdechko"

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
        component: ProductDetails
    },
    {
        path: '/accessories/shalyk_beret_svitlyi_bezh',
        component: ProductDetails
    },
    {
        path: '/accessories/baktus_vesniana_zelen',
        component: ProductDetails
    },
    {
        path: '/accessories/mitenky_olyvkovi_kosy',
        component: ProductDetails
    },
    {
        path: '/accessories/mitenky_fakturni_sovy',
        component: ProductDetails
    },
    {
        path: '/accessories/rukavytsi_siri_kosy',
        component: ProductDetails
    },
    {
        path: '/accessories/rukavytsi_mobilnogo_blakytno_zhovti',
        component: ProductDetails
    },
    {
        path: '/accessories/mitenky_snizhna_blakyt',
        component: ProductDetails
    },
    {
        path: '/accessories/mitenky_fioletovyi_melanzh',
        component: ProductDetails
    },
    {
        path: '/accessories/mitenky_snizhynky',
        component: ProductDetails
    },
    {
        path: '/accessories/mitenky_snizhne_zoloto',
        component: ProductDetails
    },
    {
        path: '/accessories/mitenky_try_troyandy',
        component: ProductDetails
    },
    {
        path: '/accessories/rukavytsi_pukhnastyky',
        component: ProductDetails
    },
    {
        path: '/accessories/rukavytsi_zhakard',
        component: ProductDetails
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
    },
    {
        path: '/pillows/minimalizm_lapky',
        component: Pillows_minimalizm_lapky
    },
    {
        path: '/pillows/nosyk_serdechko',
        component: Pillows_nosyk_serdechko
    },
    {
        path: '/pillows/pudrova_kytska',
        component: Pillows_pudrova_kytska
    },
    {
        path: '/pillows/fioletovyi_gentleman',
        component: Pillows_fioletovyi_gentleman
    },
    {
        path: '/pillows/rozhevyi_velur',
        component: Pillows_rozhevyi_velur
    },
    {
        path: '/pillows/synio_bezhevyi_melanzh',
        component: Pillows_synio_bezhevyi_melanzh
    },
    {
        path: '/pillows/bezhevyi_melanzh',
        component: Pillows_bezhevyi_melanzh
    },
    {
        path: '/pillows/siryi_kit_rozhevi_lapky',
        component: Pillows_siryi_kit_rozhevi_lapky
    },
    {
        path: '/pillows/zhovtyi_pukhnastyi_kotyk',
        component: Pillows_zhovtyi_pukhnastyi_kotyk
    },
    {
        path: '/pillows/siryi_zelenookyi_smugach',
        component: Pillows_siryi_zelenookyi_smugach
    },
    {
        path: '/pillows/pesyk_burshtynovi_ochi',
        component: Pillows_pesyk_burshtynovi_ochi
    },
    {
        path: '/pillows/pianino',
        component: Pillows_pianino
    },
    {
        path: '/pillows/rodynne_derevo',
        component: Pillows_rodynne_derevo
    },
    {
        path: '/pillows/serdechko',
        component: Pillows_serdechko
    },
    {
        path: '/pillows/pukhkenkyi_pesopodukh',
        component: Pillows_pukhkenkyi_pesopodukh
    },
    {
        path: '/pillows/zhovtyi_bukliovanyi_pesyk',
        component: Pillows_zhovtyi_bukliovanyi_pesyk
    },
    {
        path: '/pillows/sira_melanzheva_myshka',
        component: Pillows_sira_melanzheva_myshka
    },
    {
        path: '/pillows/sira_bukliovana_myshka',
        component: Pillows_sira_bukliovana_myshka
    },
    {
        path: '/pillows/metelyk_syni_smuzhky',
        component: Pillows_metelyk_syni_smuzhky
    },
    {
        path: '/pillows/metelyk_chervoni_smuzhky',
        component: Pillows_metelyk_chervoni_smuzhky
    },
    {
        path: '/pillows/lysychka',
        component: Pillows_lysychka
    },
    {
        path: '/pillows/syniy_kyt',
        component: Pillows_syniy_kyt
    },
    {
        path: '/pillows/synio_rozhevyi_kyt',
        component: Pillows_synio_rozhevyi_kyt
    },
    {
        path: '/pillows/rozhevyi_zaichyk',
        component: Pillows_rozhevyi_zaichyk
    },
    {
        path: '/kitchen/serdechka',
        component: Kitchen_serdechka
    },
    {
        path: '/kitchen/zakokhani_kotyky',
        component: Kitchen_zakokhani_kotyky
    },
    {
        path: '/kitchen/kaleidoskop',
        component: Kitchen_kaleidoskop
    },
    {
        path: '/kitchen/chervona_faktura',
        component: Kitchen_chervona_faktura
    },
    {
        path: '/kitchen/koliorovi_smailyky',
        component: Kitchen_koliorovi_smailyky
    },
    {
        path: '/kitchen/siri_smailyky',
        component: Kitchen_siri_smailyky
    },
    {
        path: '/kitchen/yabluka',
        component: Kitchen_yabluka
    },
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