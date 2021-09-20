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
                <swiper-slide><img src="../assets/img/zelenyi_baktus_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zelenyi_baktus_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zelenyi_baktus_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zelenyi_baktus_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zelenyi_baktus_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Бактус "Весняна зелень"</h3>
            <p>Виріб з напиленням весняного настрою - зелений пухнастий бактус.</p>
            <p>Плетений спицями з цікавої кольорової пряжі, можна носити і як шалик, і як хустку. Бактус має фактурне легке плетіння, тож чудово пасуватиме до демісезонних образів.</p>
            <p>Розмір: 45/190см</p>
            <div class="price">350 грн</div>
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