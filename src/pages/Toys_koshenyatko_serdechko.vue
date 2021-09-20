<template>

  <div class="heading">
    <h1>Іграшки</h1>
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
                <swiper-slide><img src="../assets/img/kotyky_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kotyky_03.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Кошенятко з сердечком</h3>
            <p>Іграшку плетено з неймовірно приємної на дотик та цікавої на вигляд пухнастої пряжі. Котик має м'якенькі рухомі лапки та хвостик і вишиту вручну мордочку. Сердечко за бажанням можна поміняти на рожеве чи прибрати.</p>
            <p>Розмір 13/7 см</p>
            <p>Матеріали: акрил, бісер (очі), холофайбер (наповнення)</p>
            <div class="price">250 грн</div>
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