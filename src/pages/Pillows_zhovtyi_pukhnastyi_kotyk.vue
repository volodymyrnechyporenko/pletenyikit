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
                <swiper-slide><img src="../assets/img/temno-syniy_zhovtuvatyi_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/temno-syniy_zhovtuvatyi_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/temno-syniy_zhovtuvatyi_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/temno-syniy_zhovtuvatyi_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/temno-syniy_zhovtuvatyi_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/temno-syniy_zhovtuvatyi_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/temno-syniy_zhovtuvatyi_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/temno-syniy_zhovtuvatyi_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Жовтий пухнастий котик</h3>
            <p>Пухнастий котоподух чи гладке плетіння? Ця модель поєднує в собі все найліпше.</p>
            <p>Пухнастий меланжевий верх та темно-синій фактурний низ створюють цікавий ефект котика в штанях.</p>
            <p>Дуже м'якенький, легенький та жмакальний котоподух прикрасить собою будь-яке місце в домі.</p>
            <p>Наповнення - холофайбер, пряжа - "травичка" і акрил, очі - гудзики.</p>
            <p>Розмір: 33/33/13см</p>
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
        <a href="#" @click="$router.push('/pillows/siryi_kit_rozhevi_lapky')">
            <div class="product-title">Сірий кіт з рожевими лапками</div>
            <img loading="lazy" src="../assets/img/siryi_kit_rozhevi_lapky_01.jpg" class="product-image" alt="">
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