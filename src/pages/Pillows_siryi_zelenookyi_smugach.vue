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
                <swiper-slide><img src="../assets/img/smugach_siryi_zelenookyi_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/smugach_siryi_zelenookyi_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/smugach_siryi_zelenookyi_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/smugach_siryi_zelenookyi_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/smugach_siryi_zelenookyi_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/smugach_siryi_zelenookyi_06.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Сірий зеленоокий смугач</h3>
            <p>Кожна котоподушка такої моделі унікальна, бо ми ніколи не повторюємо поєднання кольорів та відтінків. Техніка апсайклінгу передбачає повторне використання, тож всі відтінки пряжі ми маємо у обмеженій кількості.</p>
            <p>Цей котоподух не є виключенням. Його можна дуже довго торкатись і розглядати всі відтінки сірого, а його зелені очі легко вас загіпнотизують.</p>
            <p>Матеріали: акрил (пряжа), холофайбер (наповнення).</p>
            <p>Розмір: 42/25/13см</p>
            <div class="price">800 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/pesyk_burshtynovi_ochi')">
            <div class="product-title">Песик з бурштиновими очима</div>
            <img loading="lazy" src="../assets/img/pesyk_kvadratnyi_01.jpg" class="product-image" alt="">
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