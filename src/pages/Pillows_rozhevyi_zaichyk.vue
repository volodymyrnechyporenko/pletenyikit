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
                <swiper-slide><img src="../assets/img/rozhevyi_zaichyk_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozhevyi_zaichyk_04.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Рожевий зайчик</h3>
            <p>Знайомтесь - зайцеподух!</p>
            <p>Дуже м'якенький, неймовірно рожевий та трошки довговухий!</p>
            <p>Подушку-іграшку плетено та пошито повністю вручну. Зайчика виконано за допомогою поєднання молочної акрилової пряжі та меланжевої (біла+рожева нитка) пряжі. Виріб дуже м'який та приємний на дотик. Має гіпоалергенне наповнення холофайбер. Вишита вручну мила мордочка нікого не залишить байдужим, тож виріб чудово підійде на подарунок.</p>
            <p>Розміри: 32/25/12см</p>
            <div class="price">600 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/pukhkenkyi_pesopodukh')">
            <div class="product-title">Пухкенький песоподух</div>
            <img loading="lazy" src="../assets/img/bezhevyi_pesyk_japan_01.jpg" class="product-image" alt="">
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