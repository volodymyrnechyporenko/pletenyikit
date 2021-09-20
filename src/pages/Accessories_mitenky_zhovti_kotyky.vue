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
                <swiper-slide><img src="../assets/img/zhovti_mitenky_kotyky_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovti_mitenky_kotyky_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovti_mitenky_kotyky_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovti_mitenky_kotyky_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovti_mitenky_kotyky_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Мітенки "Жовті котики"</h3>
            <p>Мітенки-котики сонячно-жовтого кольору 100% піднімуть настрій та додадуть весняного настрою.</p>
            <p>Ручне плетіння та вишивка, пряжа - акрил.</p>
            <div class="price">250 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/accessories/mitenky_siri_kotyky')">
            <div class="product-title">Мітенки "Сірі котики"</div>
            <img loading="lazy" src="../assets/img/mitenky_kotyky_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/accessories/mitenky_fakturni_sovy')">
            <div class="product-title">Мітенки "Фактурні сови"</div>
            <img loading="lazy" src="../assets/img/mitenky_fakturni_sovy_01.jpg" class="product-image" alt="">
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