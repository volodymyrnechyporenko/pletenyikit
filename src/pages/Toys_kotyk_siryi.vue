<template>

  <div class="heading">
    <h1>Іграшки</h1>
</div>

<div class="item-all">
    <div class="item-left">
        <swiper
            :slides-per-view="1"
            :space-between="20"
            :navigation="true"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 3000 }"
            effect="fade"
            loop
        >
                <swiper-slide><img src="../assets/img/kotoigrashka_sirenka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kotoigrashka_sirenka_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kotoigrashka_sirenka_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kotoigrashka_sirenka_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kotoigrashka_sirenka_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kotoigrashka_sirenka_06.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Котик сірий</h3>
            <p>Сіренький, м'якенький та посміхається очима.</p>
            <p>Іграшка котик, плетений спицями з акрилової пряжі, має наповнення холлофайбер та вишиту мордочку. Готовий прикрашати собою вашу оселю.</p>
            <p>Розмір: 20/15см</p>
            <div class="price">250 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/toys/kotyk_bezhevyi')">
            <div class="product-title">Котик бежевий</div>
            <img loading="lazy" src="../assets/img/bezheva_kotoigrashka_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/toys/kotyk_bilyi')">
            <div class="product-title">Котик білий</div>
            <img loading="lazy" src="../assets/img/kotoigrashka_bilenka_01.jpg" class="product-image" alt="">
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