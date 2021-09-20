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
                <swiper-slide><img src="../assets/img/zhovto-garyachyi_pesyk_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovto-garyachyi_pesyk_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovto-garyachyi_pesyk_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovto-garyachyi_pesyk_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovto-garyachyi_pesyk_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Жовто-гарячий песик</h3>
            <p>Песика плетено та пошито вручну з яскравої м'якої акрилової пряжі. Подушка-іграшка містить в собі і в'язку спицями, і в'язку гачком, мордочку вишито вручну. Подушка має гіпоалергенне наповнення - холофайбер.</p>
            <p>Розміри: 33/33/10см</p>
            <div class="price">700 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/zhovtyi_bukliovanyi_pesyk')">
            <div class="product-title">Жовтий букльований песик</div>
            <img loading="lazy" src="../assets/img/zhovtyi_buklyovanyi_pesyk_01.jpg" class="product-image" alt="">
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