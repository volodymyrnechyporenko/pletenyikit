<template>

  <div class="heading">
    <h1>Аксесуари</h1>
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
                <swiper-slide><img src="../assets/img/beret_shalyk_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/beret_shalyk_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/beret_shalyk_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/beret_shalyk_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/beret_shalyk_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/beret_shalyk_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/beret_shalyk_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/beret_shalyk_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Шалик та берет "Світлий беж"</h3>
            <p>Берет та шалик, плетені спицями з тоненької бежевої ниточки з люрексом. Дуже м'які та пластичні. Набір гарно пасуватиме як до весняного, так і до осіннього образу, також підійде на теплу зиму.</p>
            <div class="price">550грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/accessories/beret_sriblo')">
            <div class="product-title">Берет "Срібло"</div>
            <img loading="lazy" src="../assets/img/beret_shalyk_09.jpg" class="product-image" alt="">
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