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
                <swiper-slide><img src="../assets/img/rodynne_derevo_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rodynne_derevo_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rodynne_derevo_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rodynne_derevo_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rodynne_derevo_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rodynne_derevo_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rodynne_derevo_07.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/rodynne_derevo_08.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Родинне дерево</h3>
            <p>Подушка "Родинне дерево" - одна з небагатьох в наявності подушок, з яких можна знімати для прання плетену частину. Цьому плюсу в догляді сприяє проста квадратна форма виробу.</p>
            <p>Подушка плетена спицями, має з одного боку орнамент фактурних дерев, а з іншого - просто геомертичний орнамент. Плетена частина має застібку-блискавку. В середині - бавовняна подушка, наповнена холофайбером.</p>
            <p>Легенька, м'яка та нейтрального кольору, подушка чудово пасуватиме до будь-якого інтер'єру.</p>
            <p>Розміри:<br>
            менша 29/29/11см<br>
            більша 33/32/12см</p>
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