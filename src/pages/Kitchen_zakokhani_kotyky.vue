<template>

  <div class="heading">
    <h1>Для кухні</h1>
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
                <swiper-slide><img src="../assets/img/zakohani_kotyky_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zakohani_kotyky_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zakohani_kotyky_03.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Закохані котики</h3>
            <p>Таких підставочок - всього дві в наявності. Тож варто поспішити з придбанням ;)</p>
            <p>Матеріали: акрил (пряжа), бавовна (підкладка)</p>
            <p>Розміри: 16/13см</p>
            <p>Ціна за штуку:</p>
            <div class="price">50 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/kitchen/serdechka')">
            <div class="product-small">Сердечка</div>
            <img loading="lazy" src="../assets/img/serdtsya_01.jpg" class="product-image" alt="">
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