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
                <swiper-slide><img src="../assets/img/kolyorovi_smailyky_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kolyorovi_smailyky_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kolyorovi_smailyky_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kolyorovi_smailyky_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kolyorovi_smailyky_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kolyorovi_smailyky_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kolyorovi_smailyky_07.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Кольорові смайлики</h3>
            <p>Мінімалістичні та усміхнені - підставочки "Смайлики". Можна придбати поштучно або разом.</p>
            <p>Діаметр 11см</p>
            <p>Ціна за штуку:</p>
            <div class="price">35 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/kitchen/siri_smailyky')">
            <div class="product-small">Сірі смайлики</div>
            <img loading="lazy" src="../assets/img/siri_smailyky_01.jpg" class="product-image" alt="">
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