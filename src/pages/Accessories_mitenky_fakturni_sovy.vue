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
                <swiper-slide><img src="../assets/img/mitenky_fakturni_sovy_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_fakturni_sovy_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_fakturni_sovy_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_fakturni_sovy_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_fakturni_sovy_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Мітенки "Фактурні сови"</h3>
            <p>Ці мітенки є найпопулярнішими серед моїх замовників. Сама ношу такі, але темно-зелені. Мітенки плетені вручну, мають два нашитих круглих гудзика-ока. М'якенькі, оригінальні, приємні на дотик і пасуватимуть під будь-яку куртку чи пальто.</p>
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