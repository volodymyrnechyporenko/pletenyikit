<template>

  <div class="heading">
    <h1>Іграшки</h1>
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
                <swiper-slide><img src="../assets/img/myshoigrashka_bila_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/myshoigrashka_bila_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/myshoigrashka_bila_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/myshoigrashka_bila_04.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Мишка біла</h3>
            <p>Біленька, плетена спицями мишка в наявності.</p>
            <p>Неймовірно мила та м'якенька. Має вишиті носик і очі з біленькими намистинками.</p>
            <p>Розмір: 12/7см</p>
            <div class="price">100 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/toys/myshka_sira')">
            <div class="product-small">Мишка сіра</div>
            <img loading="lazy" src="../assets/img/myshoigrashka_sira_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/toys/myshka_temno_sira')">
            <div class="product-small">Мишка темно-сіра</div>
            <img loading="lazy" src="../assets/img/myshoigrashka_temno-sira_01.jpg" class="product-image" alt="">
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