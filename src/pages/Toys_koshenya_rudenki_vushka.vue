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
                <swiper-slide><img src="../assets/img/koshenya_rudenki_vushka_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/koshenya_rudenki_vushka_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/koshenya_rudenki_vushka_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/koshenya_rudenki_vushka_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/koshenya_rudenki_vushka_04.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Кошеня з руденькими вушками</h3>
            <p>М'якеньке кошеня з пухнастими руденькими вушками готове прикрашати собою будь-який простір.</p>
            <p>Повністю ручна робота, від першої петельки до достаннього стібка голкою. Цікаве поєднання гладкої нитки та пряжі "травичка". Кожен наш виріб - зроблено з любов'ю та думкою про вас. Вам варто лише обрати щось з наявного на свій смак.</p>
            <p>Висота 14 см</p>
            <p>Матеріали: акрил, бісер (очі), холофайбер (наповнення)</p>
            <div class="price">300 грн</div>
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