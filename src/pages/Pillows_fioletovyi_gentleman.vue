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
                <swiper-slide><img src="../assets/img/fioletovyi_gentleman_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/fioletovyi_gentleman_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/fioletovyi_gentleman_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/fioletovyi_gentleman_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/fioletovyi_gentleman_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/fioletovyi_gentleman_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/fioletovyi_gentleman_07.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Фіолетовий джентльмен</h3>
            <p>Справжні джентельмени носять краватки-метелики, навіть якщо вони - коти.</p>
            <p>Бузковий котоджентельмен в комбінезоні та краватці готовий прикрашати собою будь-яку кімнату.</p>
            <p>Плетений спицями з велюрової світло-фіолетової пряжі та грубшої темно-бузкової акрилової нитки котик має гіпоалергенне наповнення (холофайбер), дуже м'якенький та приємний на дотик.</p>
            <p>Розмір: 33/31/13см</p>
            <div class="price">650 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/pudrova_kytska')">
            <div class="product-title">Пудрова кицька</div>
            <img loading="lazy" src="../assets/img/rozheva_gryvka_01.jpg" class="product-image" alt="">
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