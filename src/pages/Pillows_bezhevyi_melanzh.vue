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
                <swiper-slide><img src="../assets/img/bezhevyi_melanzh_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bezhevyi_melanzh_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bezhevyi_melanzh_03.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Бежевий меланж</h3>
            <p>Квадратний, м'якенький, з рухомими лапками та хвостиком - котоподух ідеально пасуватиме до будь-якого дивану чи крісла.</p>
            <p>Подушку плетено з приємної на дотик, акрилової меланжевої пряжі. Мордочку та носик також плетено спицями та нашито вручну. Наповнення - холофайбер.</p>
            <p>Жодних фото не стане, щоб зрозуміти, який котик м'якенький та легенький, тож повірте на слово.</p>
            <p>Розмір: 31/30/11см</p>
            <div class="price">550 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/synio_bezhevyi_melanzh')">
            <div class="product-title">Синьо-бежевий меланж</div>
            <img loading="lazy" src="../assets/img/synio-bezhevyi_melanzh_01.jpg" class="product-image" alt="">
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