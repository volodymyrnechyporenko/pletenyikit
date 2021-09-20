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
                <swiper-slide><img src="../assets/img/bezhevyi_pesyk_japan_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bezhevyi_pesyk_japan_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bezhevyi_pesyk_japan_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bezhevyi_pesyk_japan_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/bezhevyi_pesyk_japan_05.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Пухкенький песоподух</h3>
            <p>Подушка-іграшка повністю плетена та пошита вручну. Пряжа м'якенька, не колюча, приємна на дотик. Виріб містить гіпоалергенний наповнювач - холофайбер. Приємне поєднання бежевого, молочного та кавового кольорів з милою, вишитою вручну, мордочкою, прикрастить будь-який інтер'єр.</p>
            <p>Розміри: 34/24/12см</p>
            <div class="price">600 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/pillows/rozhevyi_zaichyk')">
            <div class="product-title">Рожевий зайчик</div>
            <img loading="lazy" src="../assets/img/rozhevyi_zaichyk_01.jpg" class="product-image" alt="">
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