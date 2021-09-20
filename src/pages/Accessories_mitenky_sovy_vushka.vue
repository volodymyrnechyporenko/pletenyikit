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
                <swiper-slide><img src="../assets/img/mitenky_sovy_vushka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_sovy_vushka_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_sovy_vushka_03.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Мітенки "Сови з вушками"</h3>
            <p>Мітенки "Сови з вушками" дуже милі та позитивні.</p>
            <p>Мітенки плетено вручну з акрилової пряжі. Вироби мають нашиті очі та дзьобик, плетні гачком, та вушка-китички по-боках виробу. Пряжа м'яка та не кусюча.</p>
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