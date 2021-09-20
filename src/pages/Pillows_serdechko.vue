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
                <swiper-slide><img src="../assets/img/serdechko_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdechko_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdechko_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdechko_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdechko_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdechko_06.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Сердечко</h3>
            <p>Коли подушку сплетено з пряжі "травичка" - це означає лише одне, що всі хотітимуть її торкнутись.</p>
            <p>Дуже легенька, м'яка та романтична за кольором та формою подушка-сердечко. Має пухнасту поверхню, гіпоалергенний наповнювач, створена для обіймів та відпочинку.</p>
            <p>Розміри: 49/42/13см</p>
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