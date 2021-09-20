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
                <swiper-slide><img src="../assets/img/rukavychky_zhakard_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavychky_zhakard_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavychky_zhakard_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavychky_zhakard_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavychky_zhakard_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Рукавички "Жакард"</h3>
            <p>Рукавички плетені вручну цікавим жакардовим плетінням. Виконані з акрилової пряжі молочного та бузкового меланжу. Виріб приємний на дотик, теплий та не кусючий. Пасуватиме як до курти, так і до пальта.</p>
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