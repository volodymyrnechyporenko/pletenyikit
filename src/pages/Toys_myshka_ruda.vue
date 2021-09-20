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
            loop
            effect="fade"
        >
                <swiper-slide><img src="../assets/img/kryska_rudisha_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kryska_rudisha_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kryska_rudisha_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kryska_rudisha_04.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Мишка руда</h3>
            <p>Повністю ручна робота, від мотка пряжі до останнього стібка. М'якенька, приємна на дотик іграшка стане чудовим подарунком близькій людині або навіть собі.</p>
            <p>Наповнення - холофайбер. Нитки - акрил.</p>
            <p>Розміри: 14/8см</p>
            <div class="price">300 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/toys/myshka_bukliovana_sira')">
            <div class="product-small">Мишка букльована сіра</div>
            <img loading="lazy" src="../assets/img/kryska_sira_02.jpg" class="product-image" alt="">
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