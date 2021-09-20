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
                <swiper-slide><img src="../assets/img/mitenky_olyvkovi_kosy_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_olyvkovi_kosy_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_olyvkovi_kosy_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_olyvkovi_kosy_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_olyvkovi_kosy_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Мітенки "Оливкові коси"</h3>
            <p>Мітенки теплого оливкового кольору - плетені вручну з акрилової пряжі. Дуже м'які та приємні на дотик. Фактурні плетені коси прикрасять будь-який образ.</p>
            <div class="price">180 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/accessories/rukavytsi_siri_kosy')">
            <div class="product-title">Рукавиці чоловічі "Сірі коси"</div>
            <img loading="lazy" src="../assets/img/rukavytsi_cholovichi_siri_01.jpg" class="product-image" alt="">
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