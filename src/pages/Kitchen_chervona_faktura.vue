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
                <swiper-slide><img src="../assets/img/chervoni_fakturni_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/chervoni_fakturni_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/chervoni_fakturni_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/chervoni_fakturni_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/chervoni_fakturni_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/chervoni_fakturni_06.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Червона фактура</h3>
            <p>Всього дві в наявності!</p>
            <p>Червоні, фатурні та досить великого розміру підставочки під горнятка - до вашої уваги. Орнамент на виробі створено виключно за рахунок чергування різних петельок в процесі плетіння. Є підставочка з силуетом руки та сонечка.</p>
            <p>Зі зворотнього боку - бавовняна підкладка з квітковим орнаментом.</p>
            <p>Розміри: 18/15см</p>
            <p>Ціна за штуку:</p>
            <div class="price">50 грн</div>
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