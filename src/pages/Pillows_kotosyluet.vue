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
                <swiper-slide><img src="../assets/img/kotosyluet_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kotosyluet_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kotosyluet_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kotosyluet_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kotosyluet_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Котосилует</h3>
            <p>Мінімалізм в тренді, тож ця модель котоПодушки як ніколи на часі!</p>
            <p>Плетений вручну з гарної меланжевої пряжі - котоподух має неймовірний вигляд та супер-приємний на дотик.</p>
            <p>Матеріали: акрил (пряжа), холофайбер (наповнення).</p>
            <p>Розмір: 46/33/15см</p>
            <div class="price">700 грн</div>
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