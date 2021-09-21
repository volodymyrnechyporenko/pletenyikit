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
                <swiper-slide><img src="../assets/img/zirka_chervoni_tony_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zirka_chervoni_tony_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zirka_chervoni_tony_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zirka_chervoni_tony_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/zirka_chervoni_tony_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Зірка в червоних тонах</h3>
            <p>Нарешті така подушка з'явилась в нашому асортименті!</p>
            <p>М'яка, плетена вручну, кольорова та п'ятикутна подушкоЗірка готова прикрашати собою вашу оселю, або стати зоряним подарунком для близької людини.</p>
            <p>Лишень придивіться до цього поєднання кольорів: темно-бордовий, фуксія, рожевий та все це відтіняється білою ниточкою.</p>
            <p>Матеріали: акрил (пряжа), холофайбер (наповнення).</p>
            <p>Розмір: 48/12см</p>
            <div class="price">500 грн</div>
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