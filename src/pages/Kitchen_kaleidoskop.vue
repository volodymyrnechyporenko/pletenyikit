<template>

  <div class="heading">
    <h1>Для кухні</h1>
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
                <swiper-slide><img src="../assets/img/kvadraty_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kvadraty_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kvadraty_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kvadraty_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kvadraty_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kvadraty_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kvadraty_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/kvadraty_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Калейдоскоп</h3>
            <p>Яскраві підставки під горнятка ручного плетіння вже готові забарвити собою ваш інтер'єр. Гарно виглядатимуть як зі склом, так і з керамікою.</p>
            <p>Підставки двохсторонні, зворотній бік - білий.</p>
            <p>В один набір входять шість підставочок.</p>
            <p>Є набори з бежевим, малиновим та бузковим гачкованим окантуванням.</p>
            <p>Розмір: 11/11см<br>
            Матеріал: акрил</p>
            <p>Ціна за набір:</p>
            <div class="price">280 грн</div>
        </div>
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