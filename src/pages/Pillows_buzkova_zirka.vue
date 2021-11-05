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
                <swiper-slide><img src="../assets/img/buzkova_zirka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/buzkova_zirka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/buzkova_zirka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/buzkova_zirka_02.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Бузкова зірка</h3>
            <p>Пастельні світлі відтінки - завжди доречні, а світло-бузковий колір і досі в трендах.</p>
            <p>Плетена вручну подушка-зірка прикрасить собою будь-який диван чи ліжечко. Подушка дуже м'яка та приємна на дотик, виконана з цікавої меланжевох пряжі, тож не є нудною та однотонною. Виріб цікаво не лише обіймати та підкладати під голову, а й - розглядати.</p>
            <p>Матеріали: акрил (пряжа), холофайбер (наповнення).</p>
            <p>Розмір: 48/12см</p>
            <div class="price">500 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/zirka_chervoni_tony')">
            <div class="product-title">Зірка в червоних тонах</div>
            <img loading="lazy" src="../assets/img/zirka_chervoni_tony_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/pillows/biryuzova_zirka')">
            <div class="product-title">Бірюзова зірка</div>
            <img loading="lazy" src="../assets/img/biryuzova_zirka_01.jpg" class="product-image" alt="">
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