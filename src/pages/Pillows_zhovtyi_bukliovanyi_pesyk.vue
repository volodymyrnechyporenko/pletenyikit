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
                <swiper-slide><img src="../assets/img/zhovtyi_buklyovanyi_pesyk_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovtyi_buklyovanyi_pesyk_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovtyi_buklyovanyi_pesyk_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zhovtyi_buklyovanyi_pesyk_04.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Жовтий букльований песик</h3>
            <p>Подушку-іграшку плетено та пошито повністю вручну, з цікавим поєднанням кольорів та фактур.</p>
            <p>Жовта пряжа має дуже гарну об'ємну букльовану фактуру, коричнева - м'якенький однотонний акрил. Виріб плетено спицями, деталі - гачком, мордочка вишита вручну.</p>
            <p>Песик має гіпоалергенне наповнення - холофайбер. Така подушка стане чудовою окрасою будь-якого інтер'єру та додасть в оселю тепла.</p>
            <p>Розміри: 34/33/10см</p>
            <div class="price">700 грн</div>
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