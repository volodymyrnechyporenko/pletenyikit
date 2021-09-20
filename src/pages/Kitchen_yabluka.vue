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
                <swiper-slide><img src="../assets/img/yabluka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/yabluka_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/yabluka_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/yabluka_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/yabluka_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/yabluka_06.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Яблука</h3>
            <p>Підставки "Яблука" плетені гачком з різних відтінків пастельної акрилової пряжі. Фактурні мінімалістичні та пасуватимуть до різного посуду.</p>
            <p>Діаметр: 11см</p>
            <p>Ціна за штуку:</p>
            <div class="price">35 грн</div>
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