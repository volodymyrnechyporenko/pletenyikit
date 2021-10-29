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
                <swiper-slide><img src="../assets/img/biryuzova_zirka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/biryuzova_zirka_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/biryuzova_zirka_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/biryuzova_zirka_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/biryuzova_zirka_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Бірюзова зірка</h3>
            <p>Останніми роками цей колір здобув величезної популярності. Одяг, аксесуари, посуд та деталі інтер'єру бірюзового кольору можна зустріти часто, але ми не думаємо, що бірюзового буває забагто, тож ніщо не спинило Плетеного КоТа додати в свої товари бірюзову зірочку-подушку.</p>
            <p>Гладенька меланжева пряжа та лаконічний силует - завжди доречні в інтер'єрі. Тож така подушка прикрасить собою будь-яку оселю.</p>
            <p>Матеріали: акрил (пряжа), холофайбер (наповнення).</p>
            <p>Розмір: 46/12см</p>
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