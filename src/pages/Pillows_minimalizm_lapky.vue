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
                <swiper-slide><img src="../assets/img/minimalistychnyi_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/minimalistychnyi_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/minimalistychnyi_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/minimalistychnyi_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/minimalistychnyi_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/minimalistychnyi_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/minimalistychnyi_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/minimalistychnyi_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Мінімалізм і рожеві лапки</h3>
            <p>Перше, що милує наше око в котиках - силует, хвіст і вушка. Друге - деталі, а часто - подушечки лапок.</p>
            <p>Тож, найголовніше в цьому подуху присутнє. Прошу купувати і класти на ліжечко.</p>
            <p>Матеріали: акрил (пряжа), холофайбер (наповнення).<br>
            Плетіння: спиці та гачок.</p>
            <p>Розміри: 32/33/15см</p>
            <div class="price">550 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/nosyk_serdechko')">
            <div class="product-title">Носик-сердечко</div>
            <img loading="lazy" src="../assets/img/kit_nosyk_01.jpg" class="product-image" alt="">
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