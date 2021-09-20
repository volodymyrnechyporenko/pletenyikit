<template>

  <div class="heading">
    <h1>Аксесуари</h1>
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
                <swiper-slide><img src="../assets/img/rukavytsi_cholovichi_siri_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_cholovichi_siri_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_cholovichi_siri_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_cholovichi_siri_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_cholovichi_siri_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_cholovichi_siri_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_cholovichi_siri_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rukavytsi_cholovichi_siri_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Рукавиці чоловічі "Сірі коси"</h3>
            <p>Вовняні чоловічі рукавиці - до вашої уваги.</p>
            <p>Саме такі рукавиці у мого чоловіка, тож виріб проходить тестування і активно використовується.</p>
            <p>Рукавиці плетені спицями, з пряжі, що містить великий відсоток вовни, але не є кусючою, тепла та приємна на дотик. Ниточка - меланжева, сіро-синюватого відтінку.</p>
            <p>Рукавиці мають отвір для вказівного пальця та не закритий верх великого пальця. Щоб можна було користуватись мобільним телефоном, не знімаючи рукавичку.</p>
            <div class="price">300 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/accessories/mitenky_olyvkovi_kosy')">
            <div class="product-title">Мітенки "Оливкові коси"</div>
            <img loading="lazy" src="../assets/img/mitenky_olyvkovi_kosy_01.jpg" class="product-image" alt="">
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