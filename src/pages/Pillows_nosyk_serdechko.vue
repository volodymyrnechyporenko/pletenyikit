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
                <swiper-slide><img src="../assets/img/kit_nosyk_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kit_nosyk_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kit_nosyk_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kit_nosyk_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kit_nosyk_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Носик-сердечко</h3>
            <p>Котоподушка дуже мінімалістична по формі, але не по деталях.</p>
            <p>Неймовірно м'який, плетений спицями котик, з гачкованими нашивками лапок та вушок, що їх можна довго розглядати та приємно торкатись. Мордочка повністю вишита та нашита вручну, котик повністю готовий до обіймів і не викличе у вас алергії, так як має гіпоалергенне наповнення.</p>
            <p>Матеріали: акрил (пряжа), холофайбер (наповнення).</p>
            <p>Розмір: 33/32/11см</p>
            <div class="price">550 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/minimalizm_lapky')">
            <div class="product-title">Мінімалізм і рожеві лапки</div>
            <img loading="lazy" src="../assets/img/minimalistychnyi_01.jpg" class="product-image" alt="">
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