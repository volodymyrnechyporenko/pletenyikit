<template>

  <div class="heading">
    <h1>Подушки</h1>
</div>

<div class="item-all">
    <div class="item-left">
        <swiper
            :slides-per-view="1"
            :space-between="20"
            :navigation="true"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 3000 }"
            loop
            effect="fade"
        >
                <swiper-slide><img src="../assets/img/synio_rozhevyi_kyt_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio_rozhevyi_kyt_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio_rozhevyi_kyt_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio_rozhevyi_kyt_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio_rozhevyi_kyt_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Синьо-рожевий кит</h3>
            <p>Це один з двох неплетених виробів у "Плетеному КоТі".</p>
            <p>Якось я знайшла серед тканин, що залишились від пошиття одягу та іграшок на замовлення, кілька видів бавовняного вельвету та бавовняну заквітчану фланель. З них мені побачились сплячі кити. І я їх пошила.</p>
            <p>Наповнення, як і у плетених подушок - холофайбер, а тканини на 100% натуральні.</p>
            <p>Розміри 56/26/14см</p>
            <div class="price">350 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/syniy_kyt')">
            <div class="product-title">Синій кит</div>
            <img loading="lazy" src="../assets/img/syniy_kyt_01.jpg" class="product-image" alt="">
        </a>
    </div>
</div>
  
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

  export default {
    components: {
      Swiper,
      SwiperSlide,
      Navigation,
      Pagination,
      Autoplay
    }
  }

</script>

<style>

</style>