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
                <swiper-slide><img src="../assets/img/lysychky_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/lysychky_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/lysychky_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/lysychky_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/lysychky_06.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/lysychky_07.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Лисичка</h3>
            <p>Помаранчева пряжа надихає не лише на рудих котиків.</p>
            <p>Квадратна лисичка-подушка - чудовий подарунок любителям тварин, бо ж вона значно краща, ніж лисяча шуба! Прикрашає - не гірше (лишень диван, а не людину), а при її створенні ніхто не постраждав.</p>
            <p>Подушка плетена вручну спицями, очі гачковані, а мордочка вишита вручну. Лисичка виконана з дуже гарного поєднання меланжевої рудо-білої пряжі та однотонної цегляно-рудої. Виріб дуже м'який та приємний на дотик. Наповнення - холофайбер.</p>
            <p>Розміри: 31/31/12см</p>
            <div class="price">550 грн</div>
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