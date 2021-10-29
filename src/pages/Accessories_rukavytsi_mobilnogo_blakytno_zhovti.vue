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
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_smugasti_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_smugasti_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_smugasti_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_smugasti_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_smugasti_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_smugasti_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_mobilnogo_smugasti_07.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Рукавиці для мобільного "Блакитно-жовтий меланж"</h3>
            <p>Рукавички плетені спицями вручну з пряжі зі значним вмістом вовни. Містять приємне поєднання пастельних відтінків блакитного, сірого, синього та жовтуватого.</p>
            <p>Рукавички мають не закриті великі пальці та отвори для вказівних пальців, для зручнішого користування мобільним в холодну погоду.</p>
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