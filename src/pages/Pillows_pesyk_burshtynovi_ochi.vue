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
                <swiper-slide><img src="../assets/img/pesyk_kvadratnyi_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pesyk_kvadratnyi_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pesyk_kvadratnyi_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pesyk_kvadratnyi_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pesyk_kvadratnyi_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pesyk_kvadratnyi_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pesyk_kvadratnyi_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/pesyk_kvadratnyi_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Песик з бурштиновими очима</h3>
            <p>Важко описати цю подушку словами.</p>
            <p>Неймовірне поєднання кольорів в меланжевому плетеному полотні нікого не залишить байдужим, а бурштинові очі дивляться прямо в серце.</p>
            <p>Неймовірний квадратний песоподух ручного плетіння - в наявності і готовий їхати до вас. Він дивитиметься на вас уважними очима, тішитиме легкою посмішкою та слухатиме висячими м'якими вушками.</p>
            <p>Песика плетено з акрилової пряжі, наповнення - холофайбер.</p>
            <p>Розміри: 28/28/13см</p>
            <div class="price">650 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/siryi_zelenookyi_smugach')">
            <div class="product-title">Сірий зеленоокий смугач</div>
            <img loading="lazy" src="../assets/img/smugach_siryi_zelenookyi_01.jpg" class="product-image" alt="">
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