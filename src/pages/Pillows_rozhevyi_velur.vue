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
                <swiper-slide><img src="../assets/img/rozhevyi_melanzh_veliur_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozhevyi_melanzh_veliur_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozhevyi_melanzh_veliur_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozhevyi_melanzh_veliur_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozhevyi_melanzh_veliur_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozhevyi_melanzh_veliur_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozhevyi_melanzh_veliur_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rozhevyi_melanzh_veliur_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Рожевий велюр</h3>
            <p>В природі не існує рожевих котів, а у Pletenyi KiT - існує!</p>
            <p>Меланжева рожева ниточка + велюрова малинова пряжа роблять котика неймовірно приємним на дотик. Вся подушка - ручне плетіння, мордочка вишита, лапки рухомі, а котик дуже легенький та м'який.</p>
            <p>Наповнення - холофайбер, пряжа - синтетична.</p>
            <p>Розмір: 35/34/15см</p>
            <div class="price">650 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/siryi_kit_rozhevi_lapky')">
            <div class="product-title">Сірий кіт з рожевими лапками</div>
            <img loading="lazy" src="../assets/img/siryi_kit_rozhevi_lapky_01.jpg" class="product-image" alt="">
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