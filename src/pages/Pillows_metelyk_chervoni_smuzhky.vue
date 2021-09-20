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
                <swiper-slide><img src="../assets/img/metelyky_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/metelyky_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/metelyky_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/metelyky_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Метелик з червоними смужками</h3>
            <p>Смужка завжди на часі.</p>
            <p>Хочу познайомити вас з таким вараінтом подушки, як метелик. Подушка за формою метелика до сорочки, але дуже м'яка, плетена, смугаста та для вашого дивану.</p>
            <p>Ця модель подушки є поєднанням молочного і червоного кольорів. Матеріали: акрил (пряжа), холофайбер (наповнення).</p>
            <p>Розміри: 46/27/12см</p>
            <div class="price">400 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/metelyk_syni_smuzhky')">
            <div class="product-title">Метелик з синіми смужками</div>
            <img loading="lazy" src="../assets/img/metelyky_01.jpg" class="product-image" alt="">
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