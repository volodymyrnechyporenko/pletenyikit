<template>

  <div class="heading">
    <h1>Аксесуари</h1>
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
                <swiper-slide><img src="../assets/img/mitenky_snizhna_blakyt_01.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_snizhna_blakyt_02.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_snizhna_blakyt_03.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_snizhna_blakyt_04.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_snizhna_blakyt_05.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/mitenky_snizhna_blakyt_06.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
    <div class="item-right">
        <div class="item-text">
            <h3>Мітенки "Сніжна блакить"</h3>
            <p>Мітенки плетені вручну з акрилової блакитної пряжі. Мають виплетені спицями коси та нашиті дерев'яні ґудзики-сніжинки. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.</p>
            <div class="price">250 грн</div>
        </div>
    </div>
</div>

<h3>Схожі товари</h3>
<div class="product-like-this">
    <div class="product">
        <a href="#" @click="$router.push('/accessories/mitenky_snizhne_zoloto')">
            <div class="product-title">Мітенки "Сніжне золото"</div>
            <img loading="lazy" src="../assets/img/mitenky_snizhne_zoloto_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/accessories/mitenky_snizhynky')">
            <div class="product-title">Мітенки "Сніжинки"</div>
            <img loading="lazy" src="../assets/img/mitenky_snizhynky_01.jpg" class="product-image" alt="">
        </a>
    </div>
    <div class="product">
        <a href="#" @click="$router.push('/accessories/mitenky_fioletovyi_melanzh')">
            <div class="product-title">Мітенки "Фіолетовий меланж"</div>
            <img loading="lazy" src="../assets/img/mitenky_fioletovyi_melanzh_01.jpg" class="product-image" alt="">
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