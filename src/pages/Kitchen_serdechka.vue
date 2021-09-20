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
                <swiper-slide><img src="../assets/img/serdtsya_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdtsya_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdtsya_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdtsya_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdtsya_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdtsya_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/serdtsya_07.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Сердечка</h3>
            <p>Ніжні та романтичні, містять в собі кілька відтінків неба, підставки "Сердечка" - в наявності.</p>
            <p>В наборі - три сердечка (блакитне, сіре, та сіро-блакитного відтінку).</p>
            <p>Матеріали: акрил (пряжа).</p>
            <p>Розміри: 14/12см</p>
            <p>Ціна за набір з трьох штук</p>
            <div class="price">80 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/kitchen/zakokhani_kotyky')">
            <div class="product-small">Закохані котики</div>
            <img loading="lazy" src="../assets/img/zakohani_kotyky_01.jpg" class="product-image" alt="">
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