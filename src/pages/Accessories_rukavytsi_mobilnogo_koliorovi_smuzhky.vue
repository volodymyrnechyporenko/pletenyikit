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
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_kolyorovi_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_kolyorovi_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_kolyorovi_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_kolyorovi_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_kolyorovi_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_kolyorovi_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_kolyorovi_07.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Рукавиці для мобільного "Кольорові смужки"</h3>
            <p>Рукавички цієї моделі плетені спицями вручну, мають відкритий великий палець і отвір для вказівного пальця, для зручнішого користування мобільним в рукавицях. Цікаве поєднання кольорів та фактурне плетіння додадуть яскравості у ваш образ.</p>
            <div class="price">300 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/accessories/rukavytsi_mobilnogo_blakytno_zhovti')">
            <div class="product-title">Рукавиці для мобільного "Блакитно-жовтий меланж"</div>
            <img loading="lazy" src="../assets/img/rukavytsi_mobilnogo_smugasti_01.jpg" class="product-image" alt="">
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