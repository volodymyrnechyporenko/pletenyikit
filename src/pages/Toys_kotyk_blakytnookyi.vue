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
                <swiper-slide><img src="../assets/img/bila_naturalistychna_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bila_naturalistychna_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bila_naturalistychna_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bila_naturalistychna_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bila_naturalistychna_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bila_naturalistychna_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bila_naturalistychna_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bila_naturalistychna_10.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Котик блакитноокий</h3>
            <p>Пухнастий та блакитноокий - чи це не головні вимоги до котічки?</p>
            <p>Іграшку поністю плетено та пошито вручну, ретельно вишито кожен пальчик. Тож, сподіваюсь, вона стане окрасою вашоно дому.</p>
            <p>Висота іграшки - 29см</p>
            <div class="price">1000 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/toys/realistychna_kotoigrashka')">
            <div class="product-small">Реалістична котоіграшка</div>
            <img loading="lazy" src="../assets/img/realistychna_kotoigrashka_01.jpg" class="product-image" alt="">
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