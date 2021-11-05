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
                <swiper-slide><img src="../assets/img/realistychna_kotoigrashka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/realistychna_kotoigrashka_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/realistychna_kotoigrashka_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/realistychna_kotoigrashka_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/realistychna_kotoigrashka_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/realistychna_kotoigrashka_06.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Реалістична котоіграшка</h3>
            <p>Обережно! З незвички, якщо у вас немає кота, можна злякатись, що до вас в хату забіг якийсь кіт) Бо ця іграшка, на перший погляд, здається справжнім сидячим котиком.</p>
            <p>Я дуже люблю супер-мінімалістичні подушки та іграшки, але існує запит і на реалістичних котиків і ми намагаємося мати в наявності різні котовироби.</p>
            <p>Плетений та пошитий повністю вручну котик - в наявності. Мордочка та лапки також вишиті вручну.</p>
            <p>Матеріали: акрил (пряжа), холофайбер (наповнення).</p>
            <p>Розмір: 46/12см</p>
            <div class="price">1000 грн</div>
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