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
                <swiper-slide><img src="../assets/img/rozheva_gryvka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozheva_gryvka_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozheva_gryvka_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozheva_gryvka_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozheva_gryvka_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozheva_gryvka_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozheva_gryvka_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozheva_gryvka_08.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozheva_gryvka_09.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozheva_gryvka_10.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Пудрова кицька</h3>
            <p>М'якенька, як свіжий зефір. Рожева, як полуничний крем. Легенька, як солодка вата. Пухкенька ніби вареничок з вишнями на пару.</p>
            <p>Тільки не смачна.)</p>
            <p>Котоподушка з неймовірно гарної пудрової пряжі, ручного плетіння. Має гарний чубчик та рухомі лапоньки.</p>
            <p>Розмір: 30/34/12см</p>
            <div class="price">650 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/fioletovyi_gentleman')">
            <div class="product-title">Фіолетовий джентльмен</div>
            <img loading="lazy" src="../assets/img/fioletovyi_gentleman_01.jpg" class="product-image" alt="">
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