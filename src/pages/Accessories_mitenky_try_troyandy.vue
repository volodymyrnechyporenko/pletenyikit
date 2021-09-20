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
                <swiper-slide><img src="../assets/img/mitenky_try_troyandy_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_try_troyandy_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_try_troyandy_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_try_troyandy_04.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Мітенки "Три троянди"</h3>
            <p>Мітенки плетені вручну з акрилової м'якої пряжі. Мають ручну вишивку - квіти. Пряжа, з якої виконано аксесуар - меланжева, в одній нитці поєднано блакитну, білу та сірувату ниточки.</p>
            <div class="price">300 грн</div>
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