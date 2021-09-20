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
                <swiper-slide><img src="../assets/img/rukavytsi_bili_puhnasti_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_bili_puhnasti_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_bili_puhnasti_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_bili_puhnasti_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_bili_puhnasti_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Рукавиці "Пухнастики"</h3>
            <p>Рукавички плетені вручну з дууже м'якої меланжевої пряжі з ворсом. Здалеку здаються білими, але насправді містять в собі дуже багато кольорьорових петельок та різноманітних фактур. Пухнасті, святкові та готові стати чудовим подарунком вам або вашим близьким.</p>
            <div class="price">270 грн</div>
        </div>
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