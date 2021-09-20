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
                <swiper-slide><img src="../assets/img/sira_bukliovana_myshka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/sira_bukliovana_myshka_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/sira_bukliovana_myshka_03.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Сіра букльована мишка</h3>
            <p>Супермінімалістична, але від цього геть не гірша!</p>
            <p>М'якенька та легенька мишоподушка відрізняється від овальних подушок лише наявністю вушок та хвостика, і в цьому її родзинка. Виріб плетений спицями з акрилової пряжі, має вишиті очі та носик та гіпоалергенний наповнювач.</p>
            <p>Розміри: 36/23/12см</p>
            <div class="price">400грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/sira_melanzheva_myshka')">
            <div class="product-title">Сіра меланжева мишка</div>
            <img loading="lazy" src="../assets/img/sira_melanzheva_myshka_01.jpg" class="product-image" alt="">
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