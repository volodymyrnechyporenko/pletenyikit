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
                <swiper-slide><img src="../assets/img/pianino_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pianino_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pianino_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pianino_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pianino_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pianino_06.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Піаніно</h3>
            <p>Подушка-піаніно створена не лише для поціновувачів музики, а й для любителів смужок, монохрому та геометричних орнаментів.</p>
            <p>Виріб плетено вручну спицями з акрилової пряжі. Подушка дуже м'яка та приємна на дотик, має наповнення - холофайбер.</p>
            <p>Розміри: 43/30/13см</p>
            <div class="price">400 грн</div>
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