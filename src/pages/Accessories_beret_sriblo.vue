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
                <swiper-slide><img src="../assets/img/beret_shalyk_09.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/beret_shalyk_10.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Берет "Срібло"</h3>
            <p>Берет плетений спицями з тоненької сірої ниточки з люрексом. Аксесуар дуже легкий та додасть романтики у ваш образ.</p>
            <div class="price">200грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/accessories/shalyk_beret_svitlyi_bezh')">
            <div class="product-title">Шалик та берет "Світлий беж"</div>
            <img loading="lazy" src="../assets/img/beret_shalyk_01.jpg" class="product-image" alt="">
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