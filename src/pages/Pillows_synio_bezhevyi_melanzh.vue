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
                <swiper-slide><img src="../assets/img/synio-bezhevyi_melanzh_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio-bezhevyi_melanzh_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio-bezhevyi_melanzh_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio-bezhevyi_melanzh_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio-bezhevyi_melanzh_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio-bezhevyi_melanzh_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio-bezhevyi_melanzh_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/synio-bezhevyi_melanzh_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Синьо-бежевий меланж</h3>
            <p>Часто можна зустріти словосполучення "синій кит" але зовсім рідко "синій кіт". Коти можуть бути будь-якого кольору, якщо вони котоподушки, тож, чого б не синій?</p>
            <p>Неймовірно гарне ручне плетіння поєднало в собі темно-синю та молочно-бежеву пряжі через кольорову меланжеву розтяжку, і з'явився чудовий та фактурний котик.</p>
            <p>Лишень придивіться до цього рукотворного полотна - так і хочеться його торкнутись!</p>
            <p>Наповнення - холофайбер, мордочка нашита вишита вручну, а лапки м'якенькі та рухомі.</p>
            <p>Розмір: 32/32/13см</p>
            <div class="price">650 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/bezhevyi_melanzh')">
            <div class="product-title">Бежевий меланж</div>
            <img loading="lazy" src="../assets/img/bezhevyi_melanzh_03.jpg" class="product-image" alt="">
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