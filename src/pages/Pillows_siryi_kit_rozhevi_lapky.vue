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
                <swiper-slide><img src="../assets/img/siryi_kit_rozhevi_lapky_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/siryi_kit_rozhevi_lapky_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/siryi_kit_rozhevi_lapky_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/siryi_kit_rozhevi_lapky_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/siryi_kit_rozhevi_lapky_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/siryi_kit_rozhevi_lapky_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/siryi_kit_rozhevi_lapky_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/siryi_kit_rozhevi_lapky_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Сірий кіт з рожевими лапками</h3>
            <p>Квадратний котомінімалізм завжди доречний.</p>
            <p>Сірий м'якенький котоподух з рухомими рожевими лапками та приємною вишитою мордочкою - 100% пасуватиме до будь-якої кімнати.</p>
            <p>Ручне плетіння спицями + ручна вишивка + гіпоалергенний наповнювач (холофайбер) = легенький та приємний подух.</p>
            <p>Розмір: 34/33/13см</p>
            <div class="price">650 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/rozhevyi_velur')">
            <div class="product-title">Рожевий велюр</div>
            <img loading="lazy" src="../assets/img/rozhevyi_melanzh_veliur_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/pillows/zhovtyi_pukhnastyi_kotyk')">
            <div class="product-title">Жовтий пухнастий котик</div>
            <img loading="lazy" src="../assets/img/temno-syniy_zhovtuvatyi_01.jpg" class="product-image" alt="">
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